# Web Dev 2 Content

This project is the content for the Web Development 2 course at SAIT. It is created using [Nextra](https://nextra.site/).

New instructors to this course must customize this content for your own sections and create your own deployment. You can do this by forking this repository and making changes to the content.

**As always: this is your course, make it your own!** Change it to suit your teaching style and your students' needs. Feel free to add, remove, or change anything you want. You can even decide to use a different technology stack if you want and not use any of the content provided here. It's up to you!

## Development Environment Setup

1. Fork this repository to your own GitHub account.
2. Install [Node.js](https://nodejs.org/en/), [git](https://git-scm.com/downloads), [Visual Studio Code](https://code.visualstudio.com/).
3. Clone the repository to your local machine, e.g. `git clone [your forked repo]`.
4. Run `npm install` to install the dependencies.
5. Run `npm run dev` to start the development server.
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Follow the instructions on [Guide: Deploying a Next.js App](http://localhost:3000/guides-and-references/deploying-nextjs-app) to deploy your content to [Vercel](https://vercel.com/). Ensure you populate the environment variables in your deployment with the values from your `.env.local` file.

## Customization

### D2L Brightspace Shell

Update the following in your D2L Brightspace shell:

- Instructor name and contact information. Navigate to: Instructor tools -> Manage files -> homepage -> edit `InstructorInfo.html`.
- Student message. Navigate to: Content. Edit this message to include your own information and your deployment URL.
- Assignment and project due dates.
- Create a new midterm exam.

### `/pages/index.mdx`

Update Instructor Information with your name, email address, Teams chat link, and schedule dates. Don't forget to update the deadline dates in your D2L Brightspace shell too.

To obtain your own Teams chat link, follow these steps:

1. Install: [ExchangeOnlineManagement](https://www.powershellgallery.com/packages/ExchangeOnlineManagement/3.0.0) PowerShell module.
2. Open a PowerShell terminal and run the following commands:
   1. `Connect-ExchangeOnline`
   2. `Get-Mailbox -Identity <your email> | Select-Object ExternalDirectoryObjectId`
3. Copy the `ExternalDirectoryObjectId` value and replace `<ExternalDirectoryObjectId>` in the following URL: `https://teams.microsoft.com/l/chat/0/0?users=8:orgid:<ExternalDirectoryObjectId>`

### `/pages/week-<x>.mdx`

For each week of the course, there is a corresponding markdown file. These files contain an overview for each week. You can customize the content for each week by editing these files. Recommendation: remove all **Class Recording** and **Class Demo** sections at the start of the course and then decide what you want to do later.

### `/pages/week-<x>/slides.mdx`

For each week of the course, there is a corresponding folder containing files for the content, assignment or project, and slides. The slides are created using [reveal.js](https://revealjs.com/). Customize the slides for each week by editing these files.

### MS Forms

This course uses Microsoft Forms for survery and project submissions. You will need to create your own forms and update the links in the following files:

`/pages/week-4.mdx`: Create your own survey form or remove the link to the survey.

`/pages/week-9/project.mdx`: Create your own Phase 1 Project submission form from this [template](https://forms.office.com/Pages/ShareFormPage.aspx?id=gyEv9Wef0kq2Vm91T-GWy1pAHe-U4v1PqxKhw8_XZ8NURThSVjFVREtNWEwzWUoyWUFZSzdaNlBEUy4u&sharetoken=suuHbu7AW0IRQc6sQrhl) and then update the link in this file.

`/pages/week-14.mdx`: Create your own Phase 3 Project submission form from this [template](https://forms.office.com/Pages/ShareFormPage.aspx?id=gyEv9Wef0kq2Vm91T-GWy1pAHe-U4v1PqxKhw8_XZ8NUME5WSVBIN1ZUVjBDR1QyVkg0WTRYQ1A0RC4u&sharetoken=kLNtvJGPvubTZuF7SdNk) and then update the _two_ links in this file.

### `.env.local`

Rename `.env.example` to `.env.local` and update the values. Due to the way Nextra works, these values are not available in the places you already manually updated above.

## Miscellaneous

- The build script has been modified to copy the slides to the `public/mdx` folder. This is required for the slides to work with reveal.js. Do not customize the `public/mdx` folder as it will be overwritten on each build.
- In the `/pages/_instructor-materials` folder, you will find various files that you can use to help you with your course.
  - `_announcements.md`: Weekly announcements to post in MS Teams for your students. Customize and update links as necessary.
  - `samples*`: Sample code for how to use the coding sandbox and other features.
  - `submission-checker.txt`: A script to check if students have submitted their assignment or project.
