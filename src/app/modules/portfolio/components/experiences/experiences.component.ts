import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { IExperience } from '../../interfaces/IExperience';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExpeirences = signal<IExperience[]>(
    [
      {
        sumary: {
          strong: "Full Stack Developer at Tech Solutions",
          p: "Led the development of web applications using React and Node.js, focusing on scalable architecture and optimizing performance."
        },
        text: "Collaborated with cross-functional teams to deliver solutions that improved customer satisfaction by 20%. Utilized MongoDB and Express for backend services, and deployed applications using Docker and AWS."
      },
      {
        sumary: {
          strong: "Backend Developer at Code Innovators",
          p: "Designed and implemented RESTful APIs with Python and Flask, ensuring efficient data flow between client and server."
        },
        text: "Worked on integrating third-party APIs and improved database queries in PostgreSQL, reducing response time by 30%."
      },
      {
        sumary: {
          strong: "Mobile App Developer at MobileX",
          p: "Developed cross-platform mobile applications using Flutter and Dart, delivering high-quality apps on both iOS and Android."
        },
        text: "Increased app performance by 25% through efficient state management and enhanced user experience by introducing real-time data synchronization."
      },
      {
        sumary: {
          strong: "Frontend Developer at Creative Minds",
          p: "Built dynamic user interfaces with Vue.js and CSS frameworks like Tailwind, ensuring responsiveness across various devices."
        },
        text: "Collaborated closely with UI/UX designers to refine designs and improve usability. Optimized page load times, improving SEO and conversion rates."
      },
      {
        sumary: {
          strong: "DevOps Engineer at Cloud Nexus",
          p: "Automated CI/CD pipelines using Jenkins, Kubernetes, and Docker to streamline deployment processes across multiple environments."
        },
        text: "Reduced deployment time by 40% and ensured 99.9% uptime for services through efficient monitoring and incident response strategies."
      },
      {
        sumary: {
          strong: "Data Engineer at Insightful Data",
          p: "Developed ETL pipelines in Python to process and analyze large datasets, enabling data-driven decision-making for business stakeholders."
        },
        text: "Migrated data from legacy systems to cloud platforms, improving data accessibility and reducing processing time by 50%."
      },
      {
        sumary: {
          strong: "Software Engineer at Smart Automation",
          p: "Developed software solutions in C++ for industrial automation systems, enhancing production efficiency and system reliability."
        },
        text: "Integrated machine learning algorithms into control systems, reducing production errors and downtime by 15%."
      },
      {
        sumary: {
          strong: "AI Engineer at FutureTech",
          p: "Built machine learning models in Python using TensorFlow and PyTorch, focusing on predictive analytics and natural language processing."
        },
        text: "Achieved a 92% accuracy rate in sentiment analysis and deployed models into production environments, improving decision-making processes."
      },
      {
        sumary: {
          strong: "Game Developer at Pixel Studios",
          p: "Developed 3D games using Unity and C#, delivering engaging gameplay experiences for multiple platforms, including PC and consoles."
        },
        text: "Optimized game performance and integrated multiplayer functionality, boosting player engagement and retention rates by 30%."
      },
      {
        sumary: {
          strong: "Blockchain Developer at Crypto Solutions",
          p: "Designed and deployed smart contracts on the Ethereum blockchain, ensuring secure and transparent transactions for decentralized applications."
        },
        text: "Enhanced security measures by auditing contracts, reducing vulnerabilities, and optimizing gas fees for users."
      }
  ])
}
