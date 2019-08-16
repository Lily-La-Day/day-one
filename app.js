

const data = {}
const text = ''
const query = ''

const jargon = [
  {
    word: 'flexible',
    partOfSpeech: 'adjective'
  },

  {
    word: 'multi-tasker',
    partOfSpeech: 'adjective'
  },

  {
    word: 'detail oriented',
    partOfSpeech: 'adjective'
  },

  {
    word: 'detail oriented',
    partOfSpeech: 'adjective'
  },
  {
    word: 'strong work ethic',
    partOfSpeech: 'noun'
  },
  {
    word: 'team work',
    partOfSpeech: 'noun'
  },
  {
    word: 'strive',
    partOfSpeech: 'verb'
  },

  {
    word: 'spearheaded',
    partOfSpeech: 'verb'
  },
  {
    word: 'independently',
    partOfSpeech: 'adverb'
  }


]




document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('.create')
  const current = document.querySelector('.current')
  const pro = document.querySelector('.writing')
  const ed = document.querySelector('.new')



  const handleChange = (e) => {
    const nodeArray = [...document.querySelectorAll('[class*="new-word-"]')]
    // nodeArray[0,nodeArray.length-1].forEach(node => node.remove())
    console.log(nodeArray)
    const getTextEnd = (textend) => {
      const newword = document.createElement('span')
      if(e.keyCode === 32){
        newword.innerText = textend + ' '
        // console.log(textend, 'new word' , newword)

        pro.append(newword)

        newword.classList.add(`new-word-${textend}`)
      }

    }



    let text = e.target.value
    text = text.split('.').join('')
    text = text.split(' ')
    const textend = text[text.length - 1]
    // console.log(text)
    current.innerHTML = textend
    if(e.keyCode === 32){


      getWordType(textend)

    }
    getTextEnd(textend)

    // console.log(text.reverse()[0])
    // text = text.reverse()

  }



  function  makeArray (newWord)  {

    const words = document.querySelectorAll('.writing')

    // console.log(typeof words)
    // console.log(words.forEach(word => word.split(' ')))
    // // words = words.map(word => {
    // //   word === newWord
    // // }
    //
    // )
    // console.log('new', words)

  }
  //
  // function  makeArray (newWord)  {
  //   console.log(newWord)
  //   let words = [...document.querySelectorAll('.writing')]
  //   console.log('mapped', words.map(word => word.childNodes[0].textContent))
  //   words = words.map(word =>
  //     console.log('split', word.childNodes[0].textContent)
  //
  //
  //   )
  //   console.log(words)
  //
  //
  // }



  const changeWord = (text, partOfSpeech) => {
    const old = document.querySelector(`[class*="-${text}"]`)

    let newWord = ''
    if (partOfSpeech === 'adjective') {

      newWord = jargon[4].word

    } else if (partOfSpeech === 'adjective') {

      newWord = jargon[6].word

    } else newWord = jargon[8].word
    ed.innerText = newWord
    old.innerText = newWord + ' '
    makeArray(newWord)







  }


  const getWordType = (text) => {

    axios.get(`https://wordsapiv1.p.mashape.com/words/${text}`,  {

      headers: { 'X-Mashape-Key': '3460369150msh8609f9e537602d4p1446a9jsnb662278c8800'}
    })
      .then((res) => {
        const partOfSpeech = res.data.results[0].partOfSpeech

        changeWord(text, partOfSpeech)
      })
      .catch((err => console.log(err)))
  }

  form.addEventListener('keydown', handleChange)







})
