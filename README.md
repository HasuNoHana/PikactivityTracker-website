# PikactivityTracker-website
PikactivityTracker-website is frontend part of an aplication that serves gathering statisics about your webside. To do so, webside must download library (https://github.com/HasuNoHana/PikactivityTracker-library) and use it to deliver events regarding that side. This is backend part (https://github.com/HasuNoHana/PikactivityTracker-server/blob/main/README.md).

Project was realized in cooperation with Marcin Bąk (https://www.linkedin.com/in/marcinbak/) who work as Vice President in FICC Post Execution Automation at Goldman Sachs.

If you want to run project locally you might find this instructions useful:
- building a project: npm install
- run tests: npm test
- run tests with code coverage: npm test -- --coverage --watchAll=false
- run project: npm start (project runs at port 3000)

To run a projest on a Docker do this (requires installed Docker):

- build image: docker build -t <image_name> .
- run image: docker run <image_namef>
- image runs at port 3000, if you want to change port please add this option -p<new_port>:3000

Authors:
- Aleksandra Okrutny (https://github.com/aleokr)
- Aniela Kosek (https://github.com/aksek)
- Patryk Karbownik (https://github.com/p-karbownik)
- Zuzanna Santorowska (https://github.com/HasuNoHana)
