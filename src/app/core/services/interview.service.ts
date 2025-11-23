import { Injectable } from '@angular/core';

export interface Interview {
    id: number;
    title: string;
    interviewee: string;
    role: string;
    date: string;
    image: string;
    excerpt: string;
    tags: string[];
    featured?: boolean;
    content?: { question: string; answer: string }[];
}

@Injectable({
    providedIn: 'root'
})
export class InterviewService {
    private interviews: Interview[] = [
        {
            id: 1,
            title: "The Architecture of Imagination",
            interviewee: "Elena Ferrante",
            role: "Novelist",
            date: "2024-10-15",
            image: "/images/founder.png",
            excerpt: "In a rare conversation, the elusive author discusses the spaces we inhabit, both in reality and in fiction, and how they shape our identities.",
            tags: ["Fiction", "Identity"],
            featured: true,
            content: [
                {
                    question: "Your work often explores the intricate relationship between physical spaces and personal identity. How do you see the city of Naples influencing your characters?",
                    answer: "Naples is not just a backdrop; it is a living, breathing entity that shapes the very souls of my characters. The chaotic streets, the vibrant colors, and the underlying tension of the city mirror the internal conflicts they face. It is a place of beauty and brutality, much like life itself."
                },
                {
                    question: "The theme of female friendship is central to your Neapolitan Novels. What draws you to this subject?",
                    answer: "Female friendship is a complex and often contradictory bond. It is a space of profound intimacy, but also of rivalry and comparison. I wanted to explore the full spectrum of this relationship, without idealizing it. Lenù and Lila are two sides of the same coin, constantly reflecting and distorting each other."
                },
                {
                    question: "You have chosen to remain anonymous despite your global success. How does this anonymity impact your writing?",
                    answer: "Anonymity gives me the freedom to write without the burden of public expectation. It allows me to disappear behind my words, to let the stories stand on their own. The author should not be the focus; the work should speak for itself."
                }
            ]
        },
        {
            id: 2,
            title: "Poetry in the Age of Algorithms",
            interviewee: "Sarah Jones",
            role: "Poet",
            date: "2024-11-02",
            image: "/images/cta-bg-v2.png",
            excerpt: "Exploring the intersection of technology and human emotion, and why verse matters more than ever.",
            tags: ["Poetry", "Technology"],
            content: [
                {
                    question: "In a world dominated by rapid digital communication, what role does poetry play?",
                    answer: "Poetry forces us to slow down. It demands attention to language, to rhythm, to the spaces between words. In an age of algorithms and instant gratification, poetry is an act of resistance. It reminds us of the nuance and complexity of human emotion that cannot be captured in a tweet."
                },
                {
                    question: "Your latest collection incorporates code and technical language. How do you reconcile these seemingly opposing worlds?",
                    answer: "They are not as opposing as we might think. Code is a language, with its own syntax and logic. By weaving technical terms into my poetry, I want to explore how technology has become an integral part of our consciousness. We live in a hybrid reality, and our art should reflect that."
                }
            ]
        },
        {
            id: 3,
            title: "History as a Living Organism",
            interviewee: "Marcus Thorne",
            role: "Historian",
            date: "2024-10-28",
            image: "/images/founder.png",
            excerpt: "Why looking back is the only way to move forward, and the responsibility of the storyteller.",
            tags: ["History", "Non-fiction"],
            content: [
                {
                    question: "You describe history as a 'living organism'. Can you elaborate on that?",
                    answer: "History is not a static set of facts; it is constantly being reinterpreted and reshaped by the present. Our understanding of the past evolves as we ask new questions and uncover new evidence. It is alive because it continues to influence our present and future."
                }
            ]
        },
        {
            id: 4,
            title: "The Art of Translation",
            interviewee: "Yuki Tanaka",
            role: "Translator",
            date: "2024-10-10",
            image: "/images/founder.png",
            excerpt: "Bridging cultures and languages, one sentence at a time.",
            tags: ["Translation", "Language"],
            content: [
                {
                    question: "Translation is often called an act of betrayal. Do you agree?",
                    answer: "I prefer to see it as an act of transformation. You cannot simply transfer words from one language to another; you must capture the spirit, the tone, and the cultural context. Something is always lost, but something new is also gained. It is a creative act in its own right."
                }
            ]
        },
        {
            id: 5,
            title: "The Future of Digital Storytelling",
            interviewee: "Alex Chen",
            role: "Futurist",
            date: "2024-09-28",
            image: "/images/cta-bg-v2.png",
            excerpt: "How immersive technologies are reshaping the way we consume and create narratives in the 21st century.",
            tags: ["Technology", "Future"],
            content: [
                {
                    question: "How will VR and AR change the way we experience stories?",
                    answer: "We are moving from passive consumption to active participation. In VR, the user is not just an observer; they are inside the story. This shifts the role of the storyteller from a director to a world-builder. It opens up incredible possibilities for empathy and immersion."
                }
            ]
        },
        {
            id: 6,
            title: "Voices from the Margins",
            interviewee: "Amara Okafor",
            role: "Sociologist",
            date: "2024-09-15",
            image: "/images/founder.png",
            excerpt: "Shining a light on underrepresented communities and the power of oral histories.",
            tags: ["Sociology", "Culture"],
            content: [
                {
                    question: "Why is oral history so important for marginalized communities?",
                    answer: "Written history has often been controlled by the powerful. Oral history allows us to capture the lived experiences of those who have been excluded from the official record. It preserves their voices, their traditions, and their truths. It is a way of reclaiming agency."
                }
            ]
        },
        {
            id: 7,
            title: "The Craft of Screenwriting",
            interviewee: "David Miller",
            role: "Screenwriter",
            date: "2024-09-01",
            image: "/images/cta-bg-v2.png",
            excerpt: "From script to screen: understanding the mechanics of visual storytelling and dialogue.",
            tags: ["Film", "Writing"],
            content: [
                {
                    question: "What is the biggest mistake new screenwriters make?",
                    answer: "Relying too much on dialogue to tell the story. Film is a visual medium. You should always try to show, not tell. If you can convey an emotion or a plot point through an action or a look, it will always be more powerful than having a character explain it."
                }
            ]
        }
    ];

    getInterviews(): Interview[] {
        return this.interviews;
    }

    getInterviewById(id: number): Interview | undefined {
        return this.interviews.find(i => i.id === id);
    }

    getFeaturedInterview(): Interview | undefined {
        return this.interviews.find(i => i.featured);
    }
}
