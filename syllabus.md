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
The course is organized into three parts, covering the following topics:
1. **Basics**: deep learning, autodiff, CUDA programming, ML hardware
2. **ML systems and optimizations**: Dataflow graph systems, ML compilation, memory and graph optimization, parallelism
3. **LLM/diffusion systems**: LLM training, inference and serving, attention optimization, scaling law, trends

There will also be multiple guest lectures from the inventors of these key techniques. It is **mandatory** to attend all guest lectures.

## Logistics
- **Lectures**: Tuesday/Thursday 12:30 PM - 1:50 PM.
- **Location**: [Warren Lecture Hall #2005](https://maps.google.com/maps?hl=en&q=Warren%20Lecture%20Hall%20%232005&source=calendar).
- **Course-related inquiry email**: [cse291a-sp26@googlegroups.com](mailto:cse291a-sp26@googlegroups.com).
- **Instructor**: [Hao Zhang](https://cseweb.ucsd.edu/~haozhang/); Office: HDSI 440.
- **TAs**: see the [staff page]({{ '/staff/' | relative_url }}).

<div class="syllabus-highlight" markdown="1">

## Important changes of this year
- **Hybrid**: A substantial portion of the lectures will take place on Zoom due to scheduling difficulties on the instructor side. This will be reflected on the course website depending on the instructor's schedule. Recordings of all lectures will be posted afterward.
- **Guest lectures**: There will be 3-4 guest lectures (on Zoom) covering developments from the most recent 1-2 years. Attendance at guest lectures is mandatory.
- **Use of agentic coders for PAs**: It is up to you whether you want to use the latest agentic coders for the PAs. We believe doing the homework by hand will greatly improve your understanding and practice in this area; agentic coders may satisfy some requirements, but they can also compromise your learning outcomes.

</div>


## Prerequisites
This is an interdisciplinary class covering many up-to-date topics and developments in machine learning, data, and systems.
If you have never taken any of the following classes (or equivalent), you might need to allocate more time to prepare yourself.
- MATH 18 (Linear Algebra) or equivalent.
- CSE 151B (Deep Learning) or equivalent.
- CSE 132C or CSE 120 (Operating Systems) or equivalent.
- DSC 102 (Systems for Scalable Analytics) or equivalent; or substantial practical experience with scalable data systems and ML algorithms, subject to the consent of the instructor.
- Proficiency in Python programming.
- Knowledge of deep learning and deep learning frameworks such as TensorFlow, PyTorch, and Hugging Face.

The following courses are not prerequisites, but they are highly recommended before taking this course:
- DSC 204A (Scalable Data Analytics).
- DSC 240 (Machine Learning).


## Course Content and Format
### Lectures
The class meets twice a week for 80-minute lectures.
  - Attending the lectures is highly encouraged, but not mandatory. Recordings will be uploaded.
  - All lectures will also be [podcast here](https://podcast.ucsd.edu/watch/sp26/cse291_b00).
  - We will use [Piazza](https://piazza.com/ucsd/spring2026/dsc291cse291a/home) for asynchronous discussions and questions.

### 3 Programming Assignments (PAs)
  - See the [assignments page]({{ '/assignments/' | relative_url }}) for updates on the PA schedule and details.
  - There are **5 late days** in total for all PAs. Plan your work accordingly.

### Exams
  - To make your life easier: **There is no midterm**. Instead, we ask for reading summaries.
  - There will be a final exam. The final exam will be held **in person**. Please plan accordingly. 
  - Exam date: 6/8/26, 11:30 AM - 2:30 PM.
  - Exam location: TBD.
  - The exams will **have and only have** multiple choice questions (MCQ), i.e. select one or multiple answers that all apply.
  - The guideline is a maximum of 1 minute per point. The points for each question will be calibrated accordingly.
  - If you miss the exam, you will receive no credit unless you notify the instructor in advance with a university-approved reason and receive a makeup exam slot.
  - The final exam is closed-book, but you may bring as many cheat sheets as you need. Phones and computers are not allowed.

### Scribe notes
Each student is required to scribe for a small number of lectures, most likely just one. Most lectures will have at least 3 students acting as scribes, and they should work as a team.
During your assigned lectures, you are to take detailed notes in collaboration with your fellow scribes. 
After the lecture, the scribe team should convert their notes into LaTeX format using the provided template.
These notes should be 6-12 pages long and must be submitted electronically.
We only require one set of notes from the scribe team. 
The instructors will then audit your notes, and post them to the [class home page](#) for everyone's benefit. 
As long as your scribe notes meet the expected standard, you will receive full credit for your scribe duties.
If your notes have errors or are otherwise not up to standard, we will inform you and give you **one chance** to correct them.
ChatGPT is highly recommended to polish the writing of your scribe notes.
You will receive zero credit if you fail to submit your notes.
  - Sign-up: [Spreadsheet](https://docs.google.com/spreadsheets/d/10c9lPa6fNvWVJ7DZx6Xm9sjxrai8VofrMDiQzwXHVcU/edit?usp=sharing) (please sign up by the end of the 2nd week)
  - Template: [Overleaf LaTeX template](https://www.overleaf.com/read/tfpkfgxxpgyd#91f059)
  - Submission: Submit a pull request to the [course website repo](https://github.com/hao-ai-lab/cse291-s26) for review.
  - Due: 11:59 PM PT, 7 days after the lecture

### Reading Summary
Starting in the first week and ending in the 9th week, the instructor/TA team will provide two required readings and multiple optional readings.
You need to submit a **brief summary** of the required readings for each week.
These reading summaries are a course requirement and must be submitted by you via Gradescope in order to receive credit.
There are no late days for reading summaries.
Your summary should be written at a high level and should focus on the main points of the reading, i.e. avoid complicated math.
As long as your summary is reasonable, you will be given full credit.
In total, you need to submit 9 reading summaries (Weeks 1-9) to earn 9 points.

You are encouraged to use LLMs to improve the writing of your summary, but you should avoid using them to generate a summary without actually completing the readings yourself.
The TA team will perform quick scans on all summaries and contact you if a summary appears to be entirely generated by ChatGPT, since that writing style is often easy to detect.
  - Template: [NeurIPS format](https://media.neurips.cc/Conferences/NeurIPS2026/Formatting_Instructions_For_NeurIPS_2026.zip)
  - Length: >= 2 pages, including the title page
  - Submission: [Gradescope](https://www.gradescope.com/courses/1288296)
  - Due: Each week's summary is due on **Tuesday at 11:59 PM** of the following week


### Participation
We appreciate everyone being actively involved in the class! There are several ways of earning participation credit, which will be capped at 6%:

- **Lecture and Piazza participation**: The top ~20 active students in class and on Piazza will get 3%; others will get credit in proportion to the participation of the ~20th person. (To prevent abuse of the system, not all contributions are counted, and the instructors reserve the right to count contributions as positive or negative.)
- **Guest lecture Q&A**: We will schedule multiple talks by external guests; asking thoughtful questions and interacting with guest speakers will earn participation scores.
- **Completing course evaluations**: At the beginning and end of the quarter, we and the school will send out surveys to help us understand how the course is going and how we can improve. If more than 80% of students complete the surveys, all students will get 2%; however, if fewer than 80% of students complete the surveys, no student will receive the 2%.
- **Karma point**: Any other act that improves the class, which a TA or instructor notices and deems worthy: 1%.


## Grading

### Components (TBD)
- Programming Assignments: 15% + 15% + 20%
- Final Exam: 36%
- Reading Summary: 9%
- Scribe Duties: 5%
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
		
**Example**: Suppose your total score is 82 and your percentile is 33. Then the relative grade is B-, while the absolute grade is B+. Your final grade would therefore be B+.

**Non-Letter Grade Options**: You have the option of taking this course for a non-letter grade. The policy for P in a P/F option is a letter grade of C- or better; for S in an S/U option is a letter grade of B- or better.


## Classroom Rules
- **5 late days** in total for 3 PAs, **no late day** for reading summaries. No extensions on the final exam time window. Plan all your work well up front accordingly.
- Students are encouraged to ask questions and participate in discussions in class and on Piazza. Please raise your hand before speaking and the instructor will call on you to speak.
- Please review UCSD's honor code and policies and procedures on [academic integrity](https://academicintegrity.ucsd.edu/). If plagiarism is detected in your code, if we detect collusion on graded quizzes or exams, if you are found to be using someone else's clickers, or if any other form of academic integrity violation is identified, you will receive a zero for that component of your score and be downgraded substantially. I will also notify the University authorities for appropriate disciplinary action, up to and including expulsion from the University.
- Please review UCSD's principles of community and our commitment to creating an inclusive learning environment on [this website](https://ucsd.edu/about/principles.html).
- Harassment, discrimination, or intimidation of any form against any student will not be tolerated in class or on Piazza. Please review UCSD's policies on dealing with harassment and discrimination on [this website](https://ophd.ucsd.edu/).
