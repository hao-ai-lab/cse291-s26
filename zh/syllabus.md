---
layout: page
nav_order: 2
title: 教学大纲
nav_exclude: true
lang: zh
lang_ref: syllabus
description: >-
    教学大纲
---

# 教学大纲

{:.no_toc}

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

**本次 CSE 291 更侧重“ML systems”，而不是更广义的“data systems”。**

课程分为三个部分，覆盖以下主题。
1. **基础**：深度学习、自动微分、CUDA 编程、ML 硬件
2. **ML 系统与优化**：数据流图系统、ML 编译、内存与图优化、ML 并行、自动并行化
3. **LLM 系统**：LLM 训练、数据整理、推理与服务、注意力优化、Scaling Law、RAG、LLM Agent

课程期间还会邀请多位关键技术的发明者来做 guest lecture，所有 guest lecture 都**必须参加**。

## 课程信息
- **上课时间**：周二、周四 06:30 PM - 08:00 PM。
- **地点**：待定。
- **授课教师**：[Hao Zhang](https://cseweb.ucsd.edu/~haozhang/)，办公室：HDSI 440。

## 先修要求
本课程具有较强的交叉性，覆盖许多机器学习、数据和系统方向的前沿主题。
如果你没有修过下列课程或同等课程，可能需要投入更多时间进行预习。
- MATH 18（线性代数）或同等课程。
- CSE 151B（深度学习）或同等课程。
- CSE 132C 或 CSE 120（操作系统）或同等课程。
- DSC 102（可扩展分析系统）或同等课程；或者在可扩展数据系统和 ML 算法方面有较强的实践经验，并获得授课教师许可。
- 熟练掌握 Python 编程。
- 了解深度学习以及 Tensor、PyTorch、HuggingFace 等框架。

以下课程不是硬性先修，但强烈建议在修读本课程前完成：
- DSC 204A（Scalable Data Analytics）
- DSC 240（Machine Learning）

## 课程内容与形式
### 讲座
课程每周线下上课 2 次，每次 80 分钟。
  - 强烈建议到场参加。
  - 所有讲座会在课后自动[发布到这里](https://podcast.ucsd.edu/watch/sp26/cse291_b00)。
  - 我们会使用 [Piazza](https://piazza.com/class/mk1r7un7xg85bw#) 进行异步讨论和答疑。

### 3 次编程作业（PA）
  - 最新 PA 安排与详情请见[作业页面]({{ '/zh/assignments/' | relative_url }})。
  - 所有 PA 共计只有 **5 天 late days**，请提前规划。

### 考试
  - 为了减轻大家压力：**没有期中考试**。替代形式是 reading summary。
  - 会有一次 final exam，且**必须线下参加**。请提前安排。
  - 考试时间：待定。
  - 试题**全部且仅有**多项选择题（MCQ），即每题可能有一个或多个正确选项。
  - 时间安排原则是每 1 分钟对应最多 1 分，具体分值会按此校准。
  - 如无提前说明并获得学校认可理由下的补考资格，缺考将记零分。
  - final exam 为闭卷，但允许携带任意数量的 cheat sheets；禁止使用手机和电脑。

### Scribe Notes
每位同学需要担任少量 lecture 的 scribe（大概率只有 1 次）。大多数 lecture 会安排至少 3 位同学共同完成。
你们需要在课上协作记录详细笔记，并在课后基于模板整理为 LaTeX 文档。
笔记长度应为 6-12 页，并以电子形式提交。
每个 scribe 小组只需提交一份。
教师团队会审核并将合格笔记发布到课程主页供大家参考。
只要笔记质量达标，就能获得 full credit；如果存在错误或质量不足，我们会通知你，并给你**一次**修改机会。
强烈建议使用 ChatGPT 来润色 scribe notes 的表达。
若未提交，将记零分。
  - 报名表：[Spreadsheet](https://docs.google.com/spreadsheets/d/18zlX-zmFu5cMR4M-xkWhIQOlnYPZrEXZj-TaO5MlIY0/edit?usp=sharing)（请在第 3 周结束前完成）
  - 模板：[Overleaf LaTeX 模板](https://www.overleaf.com/read/tfpkfgxxpgyd#91f059)
  - 提交方式：向[课程网站仓库](https://github.com/hao-ai-lab/cse291-sp26)提交 pull request
  - 截止时间：lecture 后第 7 天的晚上 11:59 PT

### Reading Summary
从第一周到第十周，教师和 TA 团队每周会提供两篇必读和若干选读材料。
你需要为每周的必读材料提交一份**详细总结**。
reading summary 是本课程要求的一部分，必须由你本人在 Gradescope 上提交才能拿到学分。
reading summary 不接受 late day。
总结应当以高层理解为主，聚焦阅读的核心观点，尽量避免复杂数学推导。
只要总结合理，就会给满分。
总共需要提交 10 份 reading summary（第 1 周到第 10 周），共 10 分。

你可以使用 ChatGPT 改善写作，但应避免直接使用 ChatPDF 之类工具在未完成阅读的情况下生成总结。
TA 团队会快速抽查所有总结；如果发现内容似乎完全由 ChatGPT 生成，我们会联系你（这种写作风格通常很容易识别）。
  - 模板：[NeurIPS format](https://neurips.cc/Conferences/2023/PaperInformation/StyleFiles)
  - 长度：>= 3 页
  - 提交平台：[Gradescope](https://www.gradescope.com/courses/934507)
  - 截止时间：本周 summary 于下周周二晚 11:59pm 提交

### 课堂参与
我们欢迎大家积极参与课程。参与分上限为 6%，获取方式如下：

- **课堂与 Piazza 参与**：课堂和 Piazza 上最活跃的大约 20 位同学可以拿到 3%；其他同学按与第 20 名相对的参与度比例给分。（为防止刷分，并非所有发言都会计入；教师团队保留决定哪些贡献算正向或负向的权利。）
- **Guest lecture Q&A**：在 guest talks 中提出有深度的问题、与嘉宾充分互动可获得参与分。
- **完成课程评估**：学期初、中、末我们及学校会发送调查问卷，用于了解课程进展并改进教学。如果超过 80% 的学生完成问卷，全班每人得 2%；若不足 80%，则**所有人都拿不到这 2%**。
- **Karma point**：任何被 TA 或授课教师注意到、并被认定对课程有帮助的行为：1%。

## 成绩构成

### 评分组成（待定）
- 编程作业：15% + 15% + 15%
- Final Exam：37%
- Reading Summary：10%
- Scribe Duties：8%
- Extra Credit：6%

### 分数线
本课程采用绝对评分与相对评分结合的 hybrid scheme。绝对分数线基于你的总分；相对分数线基于你在全班总分分布中的位置。两者中较优的成绩将作为最终成绩。

<table style="border: 1px solid black;">
  <tr>
    <td width="200px">成绩</td>
    <td width="200px">绝对分数线 (>=)</td>
    <td>相对分档（使用更严格者）</td>
  </tr>
  <tr>
    <td>A+</td>
    <td width="200px">95</td>
    <td>前 5%</td>
  </tr>
  <tr>
    <td>A</td>
    <td width="200px">90</td>
    <td>接下来的 10%（5-15）</td>
  </tr>
    <tr>
    <td>A-</td>
    <td width="200px">85</td>
    <td>接下来的 15%（15-30）</td>
  </tr>
  <tr>
    <td>B+</td>
    <td width="200px">80</td>
    <td>接下来的 15%（30-45）</td>
  </tr>
    <tr>
    <td>B</td>
    <td width="200px">75</td>
    <td>接下来的 15%（45-60）</td>
  </tr>
    <tr>
    <td>B-</td>
    <td width="200px">70</td>
    <td>接下来的 15%（60-75）</td>
  </tr>
    <tr>
    <td>C+</td>
    <td width="200px">65</td>
    <td>接下来的 5%（75-80）</td>
  </tr>
    <tr>
    <td>C</td>
    <td width="200px">60</td>
    <td>接下来的 5%（80-85）</td>
  </tr>
  <tr>
    <td>C-</td>
    <td width="200px">55</td>
    <td>接下来的 5%（85-90）</td>
  </tr>
  <tr>
    <td>D</td>
    <td width="200px">50</td>
    <td>接下来的 5%（90-95）</td>
  </tr>
  <tr>
    <td>F</td>
    <td width="200px">&lt; 50</td>
    <td>最后 5%</td>
  </tr>
</table>

**示例**：假设总分是 82，班级百分位是 33。那么相对成绩是 B-，绝对成绩是 B+，最终成绩取更优者，即 B+。

**非字母成绩选项**：如果以 P/F 修读，则 `P` 需要达到字母成绩 C- 或以上；如果以 S/U 修读，则 `S` 需要达到字母成绩 B- 或以上。

## 课堂规则
- 3 次 PA 总共只有 **5 天 late days**，reading summary **没有 late day**，final exam 也没有延长时间窗口。请提前规划。
- 鼓励同学在课堂和 Piazza 上积极提问与讨论。发言前请先举手，由授课教师点名后再发言。
- 请查看 UCSD 的 honor code 以及[academic integrity](https://academicintegrity.ucsd.edu/) 相关政策。若发现代码抄袭、考试或测验串通、代用 clicker 或任何其他学术不端行为，你将在该部分获得零分并被大幅降档。我也会向学校报告，并可能导致包括开除在内的纪律处分。
- 请阅读 UCSD 的 community principles 以及学校对包容性学习环境的承诺：[相关页面](https://ucsd.edu/about/principles.html)。
- 对任何学生的骚扰、歧视或恐吓行为，无论发生在课堂还是 Piazza，都绝不容忍。请参考 UCSD 关于 harassment 和 discrimination 的政策：[相关页面](https://ophd.ucsd.edu/)。
