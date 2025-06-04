const Anthropic = require("@anthropic-ai/sdk");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

class LearningContentGenerator {
  constructor() {
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  loadTemplate(templateName = "base-template.txt") {
    const templatePath = path.join(__dirname, "..", "templates", templateName);
    return fs.readFileSync(templatePath, "utf8");
  }

  replaceTemplateVariables(template, variables) {
    let result = template;
    Object.keys(variables).forEach((key) => {
      const placeholder = `{{${key}}}`;
      result = result.replace(new RegExp(placeholder, "g"), variables[key]);
    });
    return result;
  }

  async generateContent(topic, options = {}) {
    const template = this.loadTemplate();
    const variables = {
      TOPIC: topic,
      LEVEL: options.level || "초급",
      STYLE: options.style || "균형",
      LANGUAGE: options.language || "JavaScript",
      ...options.customVariables,
    };

    const prompt = this.replaceTemplateVariables(template, variables);

    try {
      const message = await this.anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4000,
        messages: [{ role: "user", content: prompt }],
      });

      return message.content[0].text;
    } catch (error) {
      console.error("API 호출 실패:", error);
      throw error;
    }
  }

  saveToFile(content, topic) {
    const timestamp = new Date().toISOString().split("T")[0];
    const filename = `${timestamp}_${topic.replace(/\s+/g, "_")}.md`;
    const filepath = path.join(
      __dirname,
      "..",
      "output",
      "generated",
      filename
    );

    // 디렉토리가 없으면 생성
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filepath, content, "utf8");
    return filepath;
  }
}

// CLI 사용법
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log('사용법: node generate-content.js "학습주제" [레벨] [스타일]');
    process.exit(1);
  }

  const [topic, level, style] = args;
  const generator = new LearningContentGenerator();

  generator
    .generateContent(topic, { level, style })
    .then((content) => {
      const filepath = generator.saveToFile(content, topic);
      console.log(`✅ 콘텐츠 생성 완료: ${filepath}`);
    })
    .catch((error) => {
      console.error("❌ 생성 실패:", error.message);
    });
}

module.exports = LearningContentGenerator;
