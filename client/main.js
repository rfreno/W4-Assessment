const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const gratitudeForm = document.getElementById("gratitude")
const gratitudeList = document.getElementById('gratitudeList')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// submitHandler
const submitHandler = (event) => {
    event.preventDefault()

    let input = document.getElementById('input')
    let inputString = {
        string: input.value
    } 
    showGratitude(inputString)

    input.value = ''
}

const showGratitude = string => {
    axios.post("http://localhost:4000/api/gratitude", string)
    .then(res => {
            const dataLine = document.createElement('div')
            dataLine.innerHTML = `
                <div class ='btns-container' id=${res.data.id}>
                    <p>${res.data.string}</p>
                    <button onclick="deleteMe(${res.data.id})" class='deleteBtn'>delete</button>
                    <button onclick="vote(${res.data.id},'up')" id="up" class="votingBtn">${res.data.upvote}</button>
                    <button onclick="vote(${res.data.id},'down')" id="down" class="votingBtn">${res.data.downvote}</button>
                </div>
            `
            gratitudeList.append(dataLine)
    }
    )}

const deleteMe = id => {
    // send request to delete on backend
    axios.delete(`http://localhost:4000/api/gratitude/${id}`)
        .then(res => {
            // delete div on front-end
            const toDelete = document.getElementById(Number(res.data))
            toDelete.remove()
        }
        )
}

const vote = (id, type) => {
    axios.put(`http://localhost:4000/api/gratitude/${id}`, {type}).then(
        res => {

            if (type === 'up') {
                const toUpdate = document.getElementById(Number(res.data.id)).querySelector("#up")                
                toUpdate.textContent = res.data.upvote
            } else if (type === 'down') {
                const toUpdate = document.getElementById(Number(res.data.id)).querySelector("#down")
                toUpdate.textContent = res.data.downvote
            }
        }
    )
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
gratitudeForm.addEventListener('submit', submitHandler)