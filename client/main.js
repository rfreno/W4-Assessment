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

const submitHandler = (event) => {
    event.preventDefault()

    let input = document.getElementById('input')
    let inputString = {
        string: input.value
    } 
    addGratitude(inputString)

    input.value = ''
}

const addGratitude = string => {
    axios.post("http://localhost:4000/api/gratitude", string)
        .then(res => {
            const dataLine = document.createElement('div')
            const delBtn = document.createElement('button')
            const edBtn = document.createElement('button')
            const data = document.createElement('p')
            delBtn.textContent = "Delete"
            edBtn.textContent = "Edit"
            data.textContent = res.data.string
            dataLine.append(data, delBtn, edBtn)
            gratitudeList.append(dataLine)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
gratitudeForm.addEventListener('submit', submitHandler)