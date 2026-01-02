'use client';

import { useState } from 'react';

type Mood = 'sad' | 'stressed' | 'anxious' | 'lonely' | 'bored' | null;
type Language = 'english' | 'pidgin' | 'spanish' | 'french' | 'yoruba';

interface ComedyContent {
  type: 'note' | 'video';
  content: string;
  videoUrl?: string;
  language: Language;
}

const comedyDatabase: Record<Mood, Record<Language, ComedyContent[]>> = {
  sad: {
    english: [
      { type: 'note', content: "Why don't scientists trust atoms? Because they make up everything! Just like your brain is making up reasons to be sad. You're awesome! 💪", language: 'english' },
      { type: 'note', content: "I told my computer I needed a break, and now it won't stop sending me Kit-Kats. Even technology knows you deserve sweetness today! 🍫", language: 'english' },
      { type: 'video', content: "Funny cat fails compilation", videoUrl: "https://www.youtube.com/embed/J---aiyznGQ", language: 'english' },
    ],
    pidgin: [
      { type: 'note', content: "Why person wey dey sell ice cream no dey ever sad? Because e dey always chill! You sef fit chill small, no worry yourself too much! 😄", language: 'pidgin' },
      { type: 'note', content: "Wetin make chicken cross road? E wan show say e fit do am! You sef don do plenty things wey hard before. This one go pass! 💪", language: 'pidgin' },
      { type: 'note', content: "If sadness na person, I go tell am say 'comot for my friend body!' You too strong for this thing! 🔥", language: 'pidgin' },
    ],
    spanish: [
      { type: 'note', content: "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter! Y tú tienes todo lo que necesitas para ser feliz. ¡Ánimo! 🐦", language: 'spanish' },
      { type: 'note', content: "La vida es como una bicicleta: para mantener el equilibrio, debes seguir adelante. ¡Y tú estás pedaleando genial! 🚴", language: 'spanish' },
    ],
    french: [
      { type: 'note', content: "Pourquoi les plongeurs plongent-ils toujours en arrière? Parce que sinon ils tombent dans le bateau! Comme toi, ils trouvent toujours une solution! 🤿", language: 'french' },
      { type: 'note', content: "La vie est belle, même quand elle est difficile. Tu es plus fort(e) que tu ne le penses! 💪", language: 'french' },
    ],
    yoruba: [
      { type: 'note', content: "Kilode ti ologbo fi n mu omi? Nitori o fe di 'purr-fectly' hydrated! Iwo naa, o dara pupọ! 😸", language: 'yoruba' },
      { type: 'note', content: "Aye wa dun, ko si wahala ti o tobi ju agbara re lo. O le ṣe e! 💪", language: 'yoruba' },
    ],
  },
  stressed: {
    english: [
      { type: 'note', content: "Stressed is just desserts spelled backwards! Time to treat yourself to something sweet. You've got this! 🍰", language: 'english' },
      { type: 'note', content: "Why did the scarecrow win an award? He was outstanding in his field! Just like you'll be once you get through this! 🌾", language: 'english' },
      { type: 'video', content: "Relaxing baby animals", videoUrl: "https://www.youtube.com/embed/AZ2ZPmEfjvU", language: 'english' },
    ],
    pidgin: [
      { type: 'note', content: "Stress na like garri, e go swell but e no go kill you! Take am easy, breathe small. You go dey alright! 🌬️", language: 'pidgin' },
      { type: 'note', content: "Why computer dey always calm? Because e get plenty RAM to process wahala! You sef get sense pass that thing wey dey stress you! 💻", language: 'pidgin' },
    ],
    spanish: [
      { type: 'note', content: "El estrés es como una mecedora: te mantiene ocupado pero no te lleva a ninguna parte. ¡Relájate un poco! 🪑", language: 'spanish' },
      { type: 'note', content: "Respira hondo. Todo va a estar bien. Eres más fuerte de lo que crees! 🌟", language: 'spanish' },
    ],
    french: [
      { type: 'note', content: "Le stress est comme un fauteuil à bascule: ça bouge beaucoup mais ça n'avance pas! Prends une pause! ☕", language: 'french' },
      { type: 'note', content: "Respire profondément. Tu es capable de surmonter cela! 🌈", language: 'french' },
    ],
    yoruba: [
      { type: 'note', content: "Wahala ko ni ba e! Stress yii o le ju agbara re lo. Sinmi die! 🧘", language: 'yoruba' },
      { type: 'note', content: "Emi gigun, o ma dara. Iwọ lagbara! 💪", language: 'yoruba' },
    ],
  },
  anxious: {
    english: [
      { type: 'note', content: "Anxiety is like a rocking chair - it gives you something to do but gets you nowhere. Let's rock differently today! 🎸", language: 'english' },
      { type: 'note', content: "What do you call a bear with no teeth? A gummy bear! See? Things aren't as scary as they seem! 🐻", language: 'english' },
      { type: 'video', content: "Calming nature sounds", videoUrl: "https://www.youtube.com/embed/eKFTSSKCzWA", language: 'english' },
    ],
    pidgin: [
      { type: 'note', content: "Anxiety na like person wey dey fear lizard but e dey live for Africa! E no make sense! You strong pass wetin you dey fear! 🦎", language: 'pidgin' },
      { type: 'note', content: "Breathe in, breathe out. Na you get your life, no be anxiety! You fit do this thing! 🌬️", language: 'pidgin' },
    ],
    spanish: [
      { type: 'note', content: "La ansiedad es una mentirosa. Tú eres valiente y capaz. ¡Respira! 🌸", language: 'spanish' },
      { type: 'note', content: "Cada día es una nueva oportunidad. Tú puedes con esto! 🌅", language: 'spanish' },
    ],
    french: [
      { type: 'note', content: "L'anxiété ment. Tu es courageux(se) et capable! Respire! 🌺", language: 'french' },
      { type: 'note', content: "Un pas à la fois. Tu peux le faire! 👣", language: 'french' },
    ],
    yoruba: [
      { type: 'note', content: "Aibalẹ ko dara. Ṣugbọn iwọ lagbara ju bẹẹ lọ! Sinmi! 🕊️", language: 'yoruba' },
      { type: 'note', content: "Ọjọ kan ni, o ma dara. Iwọ le ṣe e! ☀️", language: 'yoruba' },
    ],
  },
  lonely: {
    english: [
      { type: 'note', content: "Why don't oysters donate to charity? Because they're shellfish! But you're not - you're amazing and worthy of connection! 🦪", language: 'english' },
      { type: 'note', content: "Remember: even the moon is alone in the sky, but it still shines bright! You're shining too! 🌙", language: 'english' },
      { type: 'video', content: "Wholesome friendship moments", videoUrl: "https://www.youtube.com/embed/meiU6TxysCg", language: 'english' },
    ],
    pidgin: [
      { type: 'note', content: "You no dey alone even if e be like say you dey alone! Na lie! Plenty people dey wey go like know you! You special! ⭐", language: 'pidgin' },
      { type: 'note', content: "Even sun dey set everyday but e dey always come back! Your people go come, just wait small! 🌅", language: 'pidgin' },
    ],
    spanish: [
      { type: 'note', content: "No estás solo/a. Eres valioso/a y mereces amor y amistad! 💝", language: 'spanish' },
      { type: 'note', content: "Las mejores amistades a veces llegan cuando menos las esperas! 🌟", language: 'spanish' },
    ],
    french: [
      { type: 'note', content: "Tu n'es pas seul(e). Tu es précieux(se) et tu mérites l'amour! 💖", language: 'french' },
      { type: 'note', content: "Les meilleures amitiés arrivent souvent quand on s'y attend le moins! 🌟", language: 'french' },
    ],
    yoruba: [
      { type: 'note', content: "O ko wa nikan. O ṣe pataki, a si nifẹ rẹ! 💕", language: 'yoruba' },
      { type: 'note', content: "Awọn ọrẹ to dara ma wa ni akoko ti o dara! 🌟", language: 'yoruba' },
    ],
  },
  bored: {
    english: [
      { type: 'note', content: "Why did the math book look sad? It had too many problems! But you? You're problem-free and ready for fun! 📚", language: 'english' },
      { type: 'note', content: "Boredom is just your brain asking for a challenge. Time to level up! 🎮", language: 'english' },
      { type: 'video', content: "Amazing talent show moments", videoUrl: "https://www.youtube.com/embed/jblv73Hbw4s", language: 'english' },
    ],
    pidgin: [
      { type: 'note', content: "Boredom na when your brain dey hungry for action! Make we find something wey go sweet you! 🎯", language: 'pidgin' },
      { type: 'note', content: "Why person wey dey bored no fit sleep? Because sleep sef don bore am! Time to do something new! 😄", language: 'pidgin' },
    ],
    spanish: [
      { type: 'note', content: "El aburrimiento es la oportunidad perfecta para descubrir algo nuevo! 🎨", language: 'spanish' },
      { type: 'note', content: "¿Aburrido/a? ¡Es hora de una aventura! 🚀", language: 'spanish' },
    ],
    french: [
      { type: 'note', content: "L'ennui est l'occasion parfaite de découvrir quelque chose de nouveau! 🎭", language: 'french' },
      { type: 'note', content: "Tu t'ennuies? C'est l'heure d'une aventure! 🎪", language: 'french' },
    ],
    yoruba: [
      { type: 'note', content: "Laisi nkan lati ṣe? Akoko ti o dara lati wa nkan tuntun! 🎨", language: 'yoruba' },
      { type: 'note', content: "Aarẹ jẹ anfani lati ṣe nkan titun! 🎯", language: 'yoruba' },
    ],
  },
  null: {
    english: [],
    pidgin: [],
    spanish: [],
    french: [],
    yoruba: [],
  },
};

export default function HappyMoodApp() {
  const [selectedMood, setSelectedMood] = useState<Mood>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const [currentContent, setCurrentContent] = useState<ComedyContent | null>(null);
  const [showContent, setShowContent] = useState(false);

  const moods: { value: Mood; label: string; emoji: string }[] = [
    { value: 'sad', label: 'Sad', emoji: '😢' },
    { value: 'stressed', label: 'Stressed', emoji: '😰' },
    { value: 'anxious', label: 'Anxious', emoji: '😟' },
    { value: 'lonely', label: 'Lonely', emoji: '😔' },
    { value: 'bored', label: 'Bored', emoji: '😑' },
  ];

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'english', label: 'English', flag: '🇬🇧' },
    { value: 'pidgin', label: 'Pidgin', flag: '🇳🇬' },
    { value: 'spanish', label: 'Español', flag: '🇪🇸' },
    { value: 'french', label: 'Français', flag: '🇫🇷' },
    { value: 'yoruba', label: 'Yorùbá', flag: '🇳🇬' },
  ];

  const generateContent = () => {
    if (!selectedMood) return;
    
    const contentPool = comedyDatabase[selectedMood][selectedLanguage];
    if (contentPool.length === 0) return;
    
    const randomContent = contentPool[Math.floor(Math.random() * contentPool.length)];
    setCurrentContent(randomContent);
    setShowContent(true);
  };

  const reset = () => {
    setShowContent(false);
    setCurrentContent(null);
    setSelectedMood(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            😊 Happy Mood
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Personalized humor to uplift your spirit
          </p>
        </header>

        {!showContent ? (
          <div className="space-y-8">
            {/* Language Selection */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Language</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => setSelectedLanguage(lang.value)}
                    className={`p-4 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      selectedLanguage === lang.value
                        ? 'bg-white text-purple-600 shadow-lg scale-105'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <div className="text-3xl mb-1">{lang.flag}</div>
                    <div className="text-sm">{lang.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mood Selection */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4">How are you feeling?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {moods.map((mood) => (
                  <button
                    key={mood.value}
                    onClick={() => setSelectedMood(mood.value)}
                    className={`p-6 rounded-xl font-medium transition-all transform hover:scale-105 ${
                      selectedMood === mood.value
                        ? 'bg-white text-purple-600 shadow-lg scale-105'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <div className="text-4xl mb-2">{mood.emoji}</div>
                    <div>{mood.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            {selectedMood && (
              <div className="text-center">
                <button
                  onClick={generateContent}
                  className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
                >
                  ✨ Get My Mood Boost!
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl">
            {currentContent?.type === 'note' ? (
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">😄</div>
                <p className="text-2xl md:text-3xl leading-relaxed font-medium">
                  {currentContent.content}
                </p>
              </div>
            ) : currentContent?.type === 'video' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {currentContent.content}
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={currentContent.videoUrl}
                    title="Mood boost video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : null}

            <div className="flex gap-4 mt-8 justify-center">
              <button
                onClick={generateContent}
                className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                🔄 Another One!
              </button>
              <button
                onClick={reset}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
              >
                🏠 Start Over
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 opacity-75">
          <p className="text-sm">
            💜 Remember: You are loved, valued, and stronger than you think
          </p>
        </footer>
      </div>
    </div>
  );
}

