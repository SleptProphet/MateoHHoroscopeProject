
function onSubmit(){
    var tempMonth = document.getElementById("month").value;
    var tempDay = document.getElementById("number").value;
    var month = parseInt(tempMonth);
    var day = parseInt(tempDay);
    return document.getElementById("name").value + "<br>" + "<img align='right' width=500 src='img/" + image(calculateHoroscope(month,day)) +
        "'><br>" + calculateHoroscope(month,day) + prophecy(calculateHoroscope(month,day));


}
function prophecy(horoscope){
    if (horoscope == "Aquarius"){
        return "<br>" +
            "Symbol: The Water Bearer <br>" +
            "Element: Air <br>" +
            "Ruling Planet: Uranus - planet of originality <br>" +
            "Body Part: Ankles <br>" +
            "Good Day: Communicative, original, open-minded, fair, logical, inviting <br>" +
            "Bad Day: Guarded, detached, self-destructive, out-of-touch, irrational, desperate <br>" +
            "Favorite Things: Computer programming, teaching, team sports, anything with a cause or mission, independent films <br>" +
            "What You Hate: Injustice, drama queens, feeling isolated, owing money or favors, having to choose just one thing <br>" +
            "Secret Wish: To experience total freedom <br>" +
            "Where You'll Find Them: Backpacking through the Swiss Alps, picketing a company with unfair hiring practices, coaching a Little League team, revolutionizing the industry you work in <br>" +
            "Keywords: Friendliness, Eccentricity, Teamwork, Humanitarianism, Technology, Futuristic, Groups <br>";
    }
    if (horoscope == "Pisces"){
        return "<br>" +
            "Symbol: The Fish <br>" +
            "Element: Water <br>" +
            "Quality: Mutable <br>" +
            "Ruling Planet: Neptune - the planet of fantasy <br>" +
            "Body Part: Feet <br>" +
            "Good Day: Romantic, helpful, wise, comforting, imaginative <br>" +
            "Bad Day: Gullible, self-pitying, out of touch with reality, self-destructive, clingy<br>" +
            "Favorite Things: Dancing, romantic encounters, laughing and crying, walks on the beach, long poetic letters<br>" +
            "What You Hate: Reality, throwing away the Christmas tree, drill sergeants, daylight, bad design and noisy music<br>" +
            "Secret Wish: To find unconditional love<br>" +
            "How to Spot Them: Large and dreamy eyes, soothing voice, glamorous 'silver screen' look<br>" +
            "Where You'll Find Them: Printing photos in the darkroom, people watching in the shadows of an underground club, holding hands under the table at a romantic restaurant with a sunset view<br>" +
            "Keywords: Dreams, Fantasy, Healing, Compassion, Karma, Mystery<br>";
    }
    if (horoscope == "Capricorn"){
         return " <br>" +
             "Symbol: The Mountain Goat <br>" +
             "Element: Earth<br>" +
             "Ruling Planet: Saturn - the planet of discipline and maturity<br>" +
             "Body Part: Knees, skin, bones, teeth<br>" +
             "Good Day: Loyal, family-minded, hardworking, devoted, honest, fearless<br>" +
             "Bad Day: Pessimistic, unforgiving, cold, materialistic, snobbish, hopeless<br>" +
             "Favorite Things: Business cards, goals, official titles, being in charge, exclusive clubs, 'leg sports' like soccer or track, motorcycles, leather<br>" +
             "What You Hate: Quitting, shouting in public, careless mistakes, traveling without an itinerary, doing things 'just for the heck of it'<br>" +
             "Secret Wish: To have every need taken care of<br>" +
             "How to Spot Them: Distinctive jaw, strong teeth, wise look in the eyes<br>" +
             "Where You'll Find Them: Enjoying quality time with the family, working obsessively on a large-scale project, running for Senior Vice President of the company, directing a full-length feature film<br>" +
             "Keywords for Capricorn: Ambition, Structure, Goals, Long-Term Plans, Prestige, Public Image/Acclaim<br>";

    }
    if (horoscope == "Gemini"){
         return " <br>" +
             "Symbol: The Twins<br>" +
             "Ruling Planet: Mercury - the planet of communication<br>" +
             "Body Part: Shoulders, arms, hands<br>" +
             "Element: Air<br>" +
             "Good Days: Fascinating, original, resourceful, charming, wise, adventurous<br>" +
             "Bad Days: Restless, distracted, two-faced, judgmental, depressed, overwhelmed<br>" +
             "Favorite Things: Cell phones, fast cars, trendy clothes, obscure music, guitars, books, comedy clubs<br>" +
             "What they Hate: Small-minded people, dress codes, authority figures, silence, routines<br>" +
             "Secret wish: To have all the answers<br>" +
             "How to Spot Them: Mischievous twinkle in their eyes, reading, talking with their hands<br>" +
             "Where You'll Find Them: Behind the camera, behind the deejay booth, in a chat room, arguing both sides on the debate team<br>" +
             "Keywords: Communication, Collaboration, Synergy, Cleverness, Wittiness,  Inventiveness,  Ingenuity<br>";



    }
    if (horoscope == "Scorpio"){
        return " <br>" +
            "Symbol: The Scorpion<br>" +
            "Element: Water<br>" +
            "Ruling Planet: Pluto - the planet of power and regeneration<br>" +
            "Body Part: Crotch, reproductive organs<br>" +
            "Good Day: Magnetic, passionate, loyal, protective, trendsetting, brave<br>" +
            "Bad Day: Obsessive, possessive, jealous, secretive, vengeful, manipulative<br>" +
            "Favorite Things: Underground music, spicy food, an air of danger, one-of-a-kind objects, wireless devices, organic ingredients, vinyl<br>" +
            "What You Hate: Simple-minded people, insincere flattery, personal questions, living at someone else's house<br>" +
            "Secret Wish: To have complete and total control<br>" +
            "How to Spot Them: Intense eyes, a hawk-like gaze, smooth movements<br>" +
            "Where You'll Find Them: In the studio producing a platinum album, sitting at the corner table of an underground bar, taking things apart and figuring how to put them back together again<br>" +
            "Keywords: Intimacy, Sex, Secrecy, Power, Intensity, Obsession<br>";

    }
    if (horoscope == "Sagittarius"){
        return " <br>" +
            "Symbol: The Archer or Centaur<br>" +
            "Element: Fire<br>" +
            "Ruling Planet: Jupiter &#45; the planet of luck and expansion<br>" +
            "Body Part: Hips, thighs<br>" +
            "Good Day: Honest, fair-minded, inspiring, optimistic, enthusiastic, encouraging, dedicated<br>" +
            "Bad Day: Argumentative, reckless, flaky, preachy, tactless, overconfident<br>" +
            "Favorite Things: Dares, flirting, pets, pop music, international travel, laughter, karaoke, books, inspirational stories<br>" +
            "What You Hate: Prejudice, routines, rules, being bored, taking things too seriously, the words 'you can't'<br>" +
            "Secret Wish: To make the rules<br>" +
            "How to Spot Them: Strong legs, laughing eyes, comedic facial expressions<br>" +
            "Where You'll Find Them: Organizing a talent show, publishing a tell-all ‘zine, cracking inappropriate jokes in the middle of a staff meeting, backpacking through South America<br>" +
            "Keywords: Adventure, Travel, Expansion, Honesty, Outspokenness, Wisdom<br>";


    }
    if (horoscope == "Aries"){
        return " <br>" +
            "Symbol: The Ram<br>" +
            "Element: Fire<br>" +
            "Quality: Cardinal<br>" +
            "Ruling Planet: Mars, the planet of war and energy<br>" +
            "Body Part: Head, face<br>" +
            "Good Day: Energetic, encouraging, unstoppable, bold, devoted, heroic, caring<br>" +
            "Bad Day: Proud, self-centered, impulsive, bossy, stubborn, reckless, jealous<br>" +
            "Favorite Things: Competitive games, new clothes, road trips (in fast red cars), debating, expressing themselves through stunning verbal and physical feats<br>" +
            "What They Hate: Sharing their toys, being ignored, cramped spaces, losing, the word 'no'<br>" +
            "Secret Wish: To be number one<br>" +
            "How to Spot Them: High foreheads, focused or manic energy, aggressive stance<br>" +
            "Keywords: Willpower, Initiative, Determination, Passion, Beginnings, Self-Belief, Innocence<br>";

    }
    if (horoscope == "Taurus"){
        return "<br>" +
            "Symbol: The Bull<br>" +
            "Element: Earth<br>" +
            "Quality: Fixed<br>" +
            "Ruling Planet: Venus - the planet of beauty and love<br>" +
            "Body Part: Neck, throat, jaw<br>" +
            "Good Day: Patient, organized, supportive, romantic, careful, dedicated<br>" +
            "Bad Day: Overindulgent, stubborn, lazy, vain, cheap, too cautious<br>" +
            "Favorite Things: Photography, the mountains, great music, rich/gourmet food, satin sheets<br>" +
            "What They Hate: Being rushed, wasting money, dirty things, hotels, mornings<br>" +
            "Secret Wish: To own the best of everything<br>" +
            "How to Spot Them: Deep and soulful eyes, long and elegant necks, delicate jaw lines<br>" +
            "Where You'll Find Them: Comparing prices on a luxury purchase, singing in a band or choir, working three jobs, displaying paintings at an art gallery<br>" +
            "Keywords for Taurus: Stability, security, elegance, sensuality, stubbornness, persistence<br>";

    }
    if (horoscope == "Cancer"){
        return " <br>" +
            "Symbol: The Crab<br>" +
            "Ruling Planet: Moon–celestial body of moods and emotions<br>" +
            "Body Part: Chest, stomach<br>" +
            "Element: Wate<br>" +
            "Good Days: Helpful, patient, compassionate, nurturing, romantic, creative<br>" +
            "Bad Days: Gossipy, clique-y, isolated, uncommunicative, hypersensitive, overly competitive<br>" +
            "Favorite Things: Gourmet meals, intramural sports, hosting parties, working with kids, museums and art galleries<br>" +
            "What they Hate: Tacky clothes, frozen dinners, public speaking, being rushed, paying full price<br>" +
            "Secret wish: To take care of friends and family<br>" +
            "How to Spot Them: Walking with their chests puffed out, round 'moon-like' facial features<br>" +
            "Where You'll Find Them: Shopping for antiques and rare finds, creating a masterpiece with a guitar or art supplies, listening to live bands, in the kitchen<br>" +
            "Keywords: Nurturing, Sensitivity, Emotions, Moodiness, Home, Family, Children, Femininity<br>";
    }
    if (horoscope == "Leo"){
        return "<br>" +
            "Symbol: The Lion<br>" +
            "Element: Fire<br>" +
            "Ruling Planet: The Sun<br>" +
            "Body Part: Heart, upper back, spine<br>" +
            "Good Day: Courageous, kind, generous, loyal, protective, nakedly honest, entertaining<br>" +
            "Bad Day: Arrogant, wasteful, sloppy, cold-hearted, jealous, aggressive<br>" +
            "Favorite Things: Theaters, cameras, DVDs, rich desserts, red roses, exchanging gifts, singing, affection, compliments, great clothes<br>" +
            "What You Hate: Being ignored, silver medals (instead of gold), bland food, being alone, goodbyes<br>" +
            "Secret Wish: To rule the world<br>" +
            "How to Spot Them: Distinctive mane of hair, regal posture<br>" +
            "Where You'll Find Them: Producing, directing and starring in their own independent films, swept away in a romantic escapade, running for President<br>" +
            "Keywords: Passion, Romance, Expression, Drama, Playfulness, Courageous, Loyal<br>";



    }
    if (horoscope == "Libra"){
        return " <br>" +
            "Symbol: The Scales of Justice<br>" +
            "Element: Air<br>" +
            "Ruling Planet: Venus - the planet of beauty and love<br>" +
            "Body Part: Lower back, butt<br>" +
            "Good Day: Charming, lovable, fair, sincere, sharing, hopelessly romantic<br>" +
            "Bad Day: Vain, indecisive, melodramatic, manipulative, spoiled, delusional<br>" +
            "Favorite Things: Concerts at large venues, poetry, expensive jewelry, designer clothes, rich food<br>" +
            "What You Hate: Dull or practical people, bullies, being pressured to decide, saying goodnight, hearing the word 'maybe'<br>" +
            "Secret Wish: To love and be loved in return<br>" +
            "How to Spot Them: Small symmetrical features, dimples, gentle eyes, outrageous designer outfits<br>" +
            "Where You'll Find Them: Dancing the night away at a warehouse party, philosophizing about life at a coffeeshop, tucked away at home writing a novel, procrastinating, happily mingling at a social event<br>" +
            "Keywords: Commitment, Partnership, Equality, Balance, Mutuality, Fairness<br>";

    }
    if (horoscope == "Virgo"){
        return " <br>" +
            "Symbol: The Virgin<br>" +
            "Element: Earth<br>" +
            "Quality: Mutable<br>" +
            "Ruling Planet: Mercury - the planet of communication<br>" +
            "Body Part: Stomach, waist, digestive system<br>" +
            "Good Day: Dedicated, resourceful, helpful, hardworking, witty, practical<br>" +
            "Bad Day: Preachy, self-destructive, overwhelmed, self-pitying, uptight, critical<br>" +
            "Favorite Things: Laptops, magazines, long showers with aromatherapy soaps, outdoor concerts, childhood friends, Trivial Pursuit<br>" +
            "What You Hate: Lazy or vulgar people, dive bars, spicy food, leaving home, toothpaste squeezed from the top of the tube<br>" +
            "Secret Wish: To be a hero<br>" +
            "How to Spot Them: Baby faces, roving eyes that are sizing up or analyzing a situation<br>" +
            "Where You'll Find Them: Babysitting for the neighbor's kids, running errands on their endlessly long to-do lists, building something with their own two hands, cleaning something to spotless condition<br>" +
            "Keywords for Virgo: Health, Helpfulness, Order, Organization, Innocence, Purity<br>";

    }
}
function calculateHoroscope(m,d){
    if (m==1){
        if (d >= 20){
            return "Aquarius";
        }else{
            return "Capricorn";
        }
    }
    if (m==2){
        if (d >= 19){
            return "Pisces";
        }else{
            return "Aquarius";
        }
    }
    if (m==3){
        if (d >= 21){
            return "Aries";
        }else{
            return "Pisces";
        }
    }
    if (m==4){
        if (d >= 20){
            return "Taurus";
        }else{
            return "Aries";
        }
    }
    if (m==5){
        if (d >= 21){
            return "Gemini";
        }else{
            return "Taurus";
        }
    }
    if (m==6){
        if (d >= 21){
            return "Cancer";
        }else{
            return "Gemini";
        }
    }
    if (m==7){
        if (d >= 23){
            return "Leo";
        }else{
            return "Cancer";
        }
    }
    if (m==8){
        if (d >= 23){
            return "Virgo";
        }else{
            return "Leo";
        }
    }
    if (m==9){
        if (d >= 23){
            return "Libra";
        }else{
            return "Virgo";
        }
    }
    if (m==10){
        if (d >= 23){
            return "Scorpio";
        }else{
            return "Libra";
        }
    }
    if (m==11){
        if (d >= 22){
            return "Sagittarius";
        }else{
            return "Scorpio";
        }
    }
    if (m==12){
        if (d >= 22){
            return "Capricorn";
        }else{
            return "Sagittarius";
        }
    }
}
function image(horoscope){
    if (horoscope=="Aquarius") return "bronze-2742175_1920.png";
    if (horoscope=="Pisces") return "carp-2334071_1920.jpg";
    if (horoscope=="Capricorn") return "capricorn-658017_1920.jpg";
    if (horoscope=="Gemini") return "baby-772441_1920.jpg";
    if (horoscope=="Scorpio") return "scorpio-1571835_1920.jpg";
    if (horoscope=="Sagittarius") return "sagittarius-34256_1280.png";
    if (horoscope=="Aries") return "aries-2647623_1920.png";
    if (horoscope=="Taurus") return "cow-2768013_1920.jpg";
    if (horoscope=="Cancer") return "natural-2781583_1920.jpg";
    if (horoscope=="Leo") return "african-lion-2888519_1920.jpg";
    if (horoscope=="Libra") return "scales-36417_1280.png";
    if (horoscope=="Virgo") return "olive-oil-968657_1920.jpg";
}
function tester() {
    document.getElementById("output").innerHTML = onSubmit();
}