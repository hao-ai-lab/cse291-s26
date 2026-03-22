---
layout: page
nav_order: 2
title: Syllabus
lang_ref: syllabus
description: >-
    Syllabus
---

# Syllabus

{:.no_toc}

## Table of Contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

**In this year of CSE291 offering, we will focus more on "ML systems" other than "data systems"**.

The course is organized into three parts, covering the following topics.
1. **Basics**: deep learning, autodiff, CUDA programming, ML hardware
2. **ML systems and optimizations**: Dataflow graph systems, ML compilation, memory and graph optimization, ML parallelism, auto-parallelization
3. **LLM systems**: LLM training, data curation, inference and serving, attention optimization, scaling law, RAG, LLM agents

There will also be multiple guest lectures from the inventors of those key techniques. It is **mandatory** to attend all guest lectures.

## Logistics
- **Lectures**: TuTh 06:30 PM - 08:00 PM.
- **Location**: TBD.
- **Instructor**: [Hao Zhang](https://cseweb.ucsd.edu/~haozhang/); Office: HDSI 440.

## Pre-requisites
This class is an interdisciplinary class covering many up-to-date topics and developments in machine learning, data, and systems. 
If you have never taken any of the following classes (or equivalent), you might need to allocate more time to prepare yourself.
- MATH 18 (Linear Algebra) or equivalent.
- CSE 151B (Deep Learning) or equivalent
- CSE 132C or CSE 120 (Operating Systems) or equivalent.
- DSC 102 (Systems for Scalable Analytics) or equivalent; or substantial practical experience with scalable data systems and ML algorithms, subject to the consent of the instructor.
- Proficiency in Python programming.
- Knowledge of deep learning and deep learning frameworks such as Tensor, PyTorch, HuggingFace.

The following courses are not prerequisites but highly preferred before you take this course:
- DSC 204A (Scalable Data Analytics)
- DSC 240 (Machine Learning)


## Course Content and Format
### Lectures
The class meets 2 times a week for 80-minute lectures in person.
  - Attending the lectures is highly encouraged. 
  - All lectures will be automatically [podcast here](https://podcast.ucsd.edu/watch/sp26/cse291_b00) afterward.
  - We will use [Piazza](https://piazza.com/ucsd/spring2026/cse291) for asynchronous discussions and questions.

### 3 Programming Assignments (PAs)
  - See the [assignments page]({{ '/assignments/' | relative_url }}) for updates on the PA schedule and details.
  - There are **5 late days** in total for all PAs. Plan your work accordingly.

### Exams
  - To make your life easier: **There is NO midterm**. As an alternative, we ask for reading summary. 
  - There will be a final exam. The final exam will be held **in person**. Please plan accordingly. 
  - Exam date: March 18, 2026, 7-10 pm.
  - The exams will **have and only have** multiple choice questions (MCQ), i.e. select one or multiple answers that all apply.
  - The guideline for time per question is a max of 1 min per point. The points of each question will be calibrated accordingly.
  - If you miss the exam, you will get no credit for it, unless you notify the instructor in advance with a university approved reason and receive a makeup exam slot.
  - The final exam is close books, but you are allow to take as many cheat sheets as you need, but not phones or computers!

### Scribe notes
Each student is required to scribe for a small number of lectures (most likely just 1). Most lectures will have at least 3 students acting as scribes, and they should work as a team. 
During your assigned lectures, you are to take detailed notes in collaboration with your fellow scribes. 
After the lecture, the scribe team is to convert their notes into LaTeX format using the provided template. 
These notes should be 6-12 pages long, and must be submitted electronically. 
We only require one set of notes from the scribe team. 
The instructors will then audit your notes, and post them to the [class home page](#) for everyone's benefit. 
As long as your scribe notes are of sufficient standard, you will be awarded full credit for scribe duties. 
If your notes have errors or are otherwise not up to standard, we will inform you and give you **one chance** to correct them. 
ChatGPT is highly recommended to polish the writing of your scribe notes.
You will receive zero credit if you fail to submit your notes.
  - Sign-up: [Spreadsheet](https://docs.google.com/spreadsheets/d/18zlX-zmFu5cMR4M-xkWhIQOlnYPZrEXZj-TaO5MlIY0/edit?usp=sharing) (please sign-up by the end of 3rd week)
  - Template: [Overleaf latex template](https://www.overleaf.com/read/tfpkfgxxpgyd#91f059)
  - Submission: Submit a pull request to [course website repo](https://github.com/hao-ai-lab/cse291-sp26) for review
  - Due: 11:59 pm PT of the day 7 days from the lecture

### Reading Summary
Starting from the first week and ending in the tenth week, the instructor/TA team will provide two required reading and multiple optional readings.
You need to submit a **detailed summary** of the required reading you have done for each week. 
These reading summaries are a requirement for this class, and they must be submitted via Gradescope by you in order to receive credits. 
There is no late day for reading summary.
Your summary should be written at a high level, and should focus on the main points of the reading (i.e. avoid complicated math). 
As long as your summary is reasonable, you will be given full credit.
In total, you need to submit 10 reading summaries (week 1 - week 10) to get 10 points.

You are encouraged to use ChatGPT to improve the writing of your summary; but you should avoid using software like ChatPDF to generate a summary without actually finishing any readings by yourself. 
The TA team will perform quick scans on all summaries and contact you if they notice the summary seems to be entirely generated by ChatGPT (the writing style is easily detectable). 
  - Template: [NeurIPS format](https://neurips.cc/Conferences/2023/PaperInformation/StyleFiles)
  - Length: >= 3 pages
  - Submission: [Gradescope](https://www.gradescope.com/courses/934507)
  - Due: The summary of this week is due on **Tuesday 11:59pm** of the next week


### Participation
We appreciate everyone being actively involved in the class! There are several ways of earning participation credit, which will be capped at 6%:

- **Lecture and piazza participation**: The top ~20 active students in class and in Piazza will get 3%; others will get credit in proportion to the participation of the ~20th person. (To prevent abuse of the system, not all contributions are counted and instructors hold the right to determine to count contributions as positive or negative.)
- **Guest lecture Q&A**: We will schedule multiple talks by external guests; asking critical questions and interact with guest speakers will earn participation scores. 
- **Completing course evaluations**: At the beginning, middle, and the end of the quarter, we and the school will send out surveys to help us understand how the course is going, and how we can improve. If more than 80% students complete the surveys, all students will get 2%; However, if less 80% of the students complete the surveys, NO student will get the 2%.
- **Karma point**: Any other act that improves the class, which a TA or instructor notices and deems worthy: 1%.


## Grading

### Components (TBD)
- Programming Assignments: 15% + 15% + 15%
- Final Exam: 37%
- Reading Summary: 10%
- Scribe Duties: 8%
- Extra Credit: 6%


### Cutoffs 
The grading scheme is a hybrid of absolute and relative grading. The absolute cutoffs are based on your absolute total score. The relative bins are based on your position in the total score distribution of the class. The better grade among the two (absolute-based and relative-based) will be your final grade.

<table style="border: 1px solid black;">
  <tr>
    <td width="200px">Grade</td>
    <td width="200px">Absolute Cutoff (>=)</td>
    <td>Relative Bin (Use strictest)</td>
  </tr>
  <tr>
    <td>A+</td>
    <td width="200px">95</td>
    <td>Highest 5%</td>
  </tr>
  <tr>
    <td>A</td>
    <td width="200px">90</td>
    <td>Next 10% (5-15)</td>
  </tr>
    <tr>
    <td>A-</td>
    <td width="200px">85</td>
    <td>Next 15% (15-30)</td>
  </tr>
  <tr>
    <td>B+</td>
    <td width="200px">80</td>
    <td>Next 15% (30-45)</td>
  </tr>
    <tr>
    <td>B</td>
    <td width="200px">75</td>
    <td>Next 15% (45-60)</td>
  </tr>
    <tr>
    <td>B-</td>
    <td width="200px">70</td>
    <td>Next 15% (60-75)</td>
  </tr>
    <tr>
    <td>C+</td>
    <td width="200px">65</td>
    <td>Next 5% (75-80)</td>
  </tr>
    <tr>
    <td>C</td>
    <td width="200px">60</td>
    <td>Next 5% (80-85)</td>
  </tr>
  <tr>
    <td>C-</td>
    <td width="200px">55</td>
    <td>Next 5% (85-90)</td>
  </tr>
  <tr>
    <td>D</td>
    <td width="200px">50</td>
    <td>Next 5% (90-95)</td>
  </tr>
  <tr>
    <td>F</td>
    <td width="200px">&lt; 50</td>
    <td>Lowest 5%</td>
  </tr>
</table>
		
**Example**: Suppose the total score is 82 and the percentile is 33. So, the relative grade is B-, while the absolute grade is B+. The final grade then is B+.

**Non-Letter Grade Options**: You have the option of taking this course for a non-letter grade. The policy for P in a P/F option is a letter grade of C- or better; for S in an S/U option is a letter grade of B- or better.


## Classroom Rules
- **5 late days** in total for 3 PAs, **no late day** for reading summaries. No extensions on the final exam time window. Plan all your work well up front accordingly.
- Students are encouraged to ask questions and participate in discussions in class and on Piazza. Please raise your hand before speaking and the instructor will call on you to speak.
- Please review UCSD's honor code and policies and procedures on [academic integrity](https://academicintegrity.ucsd.edu/) here. If plagiarism is detected in your code, or if we detect collusion on the graded quizzes or exams, or if you are found to be using someone else's clickers, or if any other form of academic integrity violation is identified, you will get zero for that component of your score and get downgraded substantially. I will also notify the University authorities for appropriate disciplinary action to be taken, up to and including expulsion from the University.
- Please review UCSD's principles of community and our commitment to creating an inclusive learning environment on [this website](https://ucsd.edu/about/principles.html).
- Harassment, discrimination, or intimidation of any form against any student will not be tolerated in class or on Piazza. Please review UCSD's policies on dealing with harassment and discrimination on [this website](https://ophd.ucsd.edu/).
