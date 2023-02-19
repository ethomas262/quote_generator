const generateRanNum = () =>{
    return Math.floor(Math.random() * 10)
}

const contents = FileReader.readAsText("quotes.txt")

let quoteArr = contents.split(";")