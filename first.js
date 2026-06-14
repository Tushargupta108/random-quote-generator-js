
const quotearray=["Start where you are, use what you have, and build the future you want one step at a time.",




    "Progress over perfection.Progress matters more than perfection; every small improvement compounds over time.",
    
    
    
    
    " Consistency wins.Success is often the result of consistent effort repeated long after motivation fades.",
    
    
    
    
    "Challenges reveal strength.Difficult days do not define your limits; they reveal your strength and resilience",
    
    
    
    
    " Believe before you achieve.Believe in your ability before the results appear, and your actions will begin to follow.",
    
    
    
    
    " Small steps count.Small steps taken daily can lead to extraordinary destinations.",
    
    
    
    
    " Fear is not a stop sign.Fear is not a signal to stop; it is often a sign that growth is nearby.",
    
    
    
    
    " Keep moving When the path feels uncertain, focus on the next right step instead of the whole journey.",
    
    
    
    
    "Your future is built today.The choices you make today quietly shape the opportunities you will have tomorrow.",
    
    
    
    
    "Persistence matters.Persistence can accomplish what talent alone cannot.",
    
    
    
    
    " Learn from setbacks.Every setback carries a lesson that can become the foundation of your next breakthrough.",
    
    
    
    
    " Stay curious.Curiosity keeps you learning, and learning keeps you moving forward.",
    
    
    
    
    " Discipline creates freedom.Discipline creates freedom by turning intentions into reliable actions.",
    
    
    
    
    "Your pace is your own.Do not compare your timeline to someone else's; your journey is uniquely yours.",
    
    
    
    
    " Focus on what you can control.Energy grows when you direct it toward the things you can influence.",
    
    
    
    
    " Courage begins with action.Courage is not the absence of doubt; it is the decision to act despite it.",
    
    
    
    
    " Consistent effort compounds.The effort you invest today may seem small, but it compounds into future success.",
    
    
    
    
    " Keep your vision alive.Protect your goals by reminding yourself why they matter when motivation fades.",
    
    
    
    
    "Resilience is a skill.Resilience is built through practice, one challenge at a time.",
    
    
    
    
    " Your best chapter may still be ahead.Keep going; the chapter you are writing now may become the turning point of your story."
    
    ]
    
    // from this aray random index quotes will choosen
    
    
    
    
    const h1=document.querySelector('h1');
    
    const button=document.querySelector('button');
    
    // add event listner on button
    
    button.addEventListener('click',()=>{
    
    const index=Math.floor(Math.random()*20);
    
    //  math.random ->Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
    
    // Math.random() * 20 Multiplies that random number by 20.JavaScript 0.1234 * 20 = 2.468
    
    // math.floor Removes the decimal part and rounds down to the nearest integer. 2.343=2
    
    h1.textContent=quotearray[index];
    
    //  from selected object h1 -> changes its text from randomly index quote of array
    
    })
    
    
    
    