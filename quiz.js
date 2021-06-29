let quiz ={
    cauhoii: function(cauhoiis){
        fetch(
            "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple" +this.apiKey).then((response) => {return response.json();})
            .then((data) => this.myquiz(data));
    },

    myquiz :(data)=>{
        const {category} = data.results;
        const { type } = data.results;
        const { difficulty } = data.results;
        const {question } = data.results;
        const {correct_answer} = data.results;
        const {incorrect_answers} = data.results;
        document.querySelector(".theloai").innerText = "Thể loại" + category;
        document.querySelector(".cau_hoi").src =question;
        document.querySelector(".dokho").innerText ="độ khó"+ difficulty;
        document.querySelector(".dapandung").innerText = correct_answer;
        document.querySelector(".dapansai").innerText =incorrect_answers;
        document.querySelector(".types").innerText =type;
        document.querySelector(".weather").classList.remove("loading");
    }
}