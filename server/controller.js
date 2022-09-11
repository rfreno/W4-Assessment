let globalID = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A lifetime friend shall soon be made.','A pleasant surprise is waiting for you.','All the effort you are making will ultimately pay off.','An acquaintance of the past will affect you in the near future.','Any decision you have to make tomorrow is a good decision.','Determination is what you need now.','Follow the middle path. Neither extreme will make you happy.']

        //choose random fortune
        let rand = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[rand]

        res.status(200).send(randomFortune)
    },
    addGratitude: (req, res) => {
        let { string } = req.body
        let gratitude = {
            string,
            id: globalID
        }
        console.log(gratitude.id)
        res.status(200).send(gratitude)
        globalID++
    }

}