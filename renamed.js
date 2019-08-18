
document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('.create')
  const current = document.querySelector('.current')
  const pro = document.querySelector('.writing')
  const ed = document.querySelector('.new')
  const span = document.querySelectorAll('.writing')



  const handleChange = (e) => {
    const getTextEnd = (textend) => {
      const newword = document.createElement('span')
      newword.classList.add('span')
      if(e.keyCode === 32){
        newword.innerText = textend + ' '
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

  }


  const forChunk = (e) => {
    const getTextEnd = (textend) => {
      const newword = document.createElement('span')
      newword.classList.add('span')
      newword.innerText = textend + ' '
      pro.append(newword)
      newword.classList.add(`new-word-${textend}`)


    }



    let text = e.target.value
    text = text.trim().split('.').join('')
    text = text.split(',').join('')
    text = text.split('!').join('')
    text = text.split(')').join('')
    text = text.split('(').join('')
    text = text.split(':').join('')
    text = text.split(' ')

    console.log(text.length)
    for(let i = 0; i < text.length; i ++) {
      const textend = text[i]
      // console.log(text)
      current.innerHTML = textend


      getWordType(textend)
      getTextEnd(textend)

    }
  }

  const ingWords = [ 'striving for', 'motivating', 'executing', 'establishing', 'launching', 'implementing']
  const adverbs = ['passionately', 'independently', 'expertly']
  const past = ['experienced', 'spearheaded']






  const changeWord = (text, textEnd) => {
    let joined = textEnd.slice(-3)


    joined = joined.join('')
    console.log(joined)
    let newWord = ''
    if (joined === 'ing') {

      newWord = ingWords[Math.floor(Math.random() * 6)]

    } else if (joined.slice(1) === ('ed') ) {

      newWord = past[Math.floor(Math.random() * 2) ]

    } else if (joined === ('ier') ) {

      newWord = 'more strategic'



    } else if (textEnd === ('glad') ) {

      newWord = 'a team player'

    }    else if (joined === ('tly') ) {

      newWord = adverbs[Math.floor(Math.random() * 3)]

    }    else if (joined === ('ord') ) {

      newWord = 'track record'

    }  else if (joined === ('ity') ) {

      newWord = 'responsibility'

    } else newWord = text

    ed.innerText = newWord

    setTimeout(function() {
      change(newWord, text)
    }, 1000)


  }

  const change = (newWord, text) => {
    const old = document.querySelector(`.new-word-${text}`)
    old.innerText = newWord + ' '

  }


  const getWordType = (text) => {

    const textArray = text.split('')

    const textEnd = textArray
    // console.log(joined)
    changeWord(text, textEnd)
  }

  const remove = (e) => {

    console.log('removing')
    console.log(e.target)
    if(e.target.classList.contains('span') )
      e.target.remove()
  }

  form.addEventListener('keydown', handleChange)
  form.addEventListener('click', forChunk)
  span.forEach(word => word.addEventListener('click', remove))
})



//
// const data = {}
// const text = ''
// const query = ''
//
// const jargon = [
//   {
//     word: 'flexible',
//     partOfSpeech: 'adjective'
//   },
//
//   {
//     word: 'multi-tasker',
//     partOfSpeech: 'adjective'
//   },
//
//   {
//     word: 'detail oriented',
//     partOfSpeech: 'adjective'
//   },
//
//   {
//     word: 'detail oriented',
//     partOfSpeech: 'adjective'
//   },
//   {
//     word: 'strong work ethic',
//     partOfSpeech: 'noun'
//   },
//   {
//     word: 'team work',
//     partOfSpeech: 'noun'
//   },
//   {
//     word: 'strive',
//     partOfSpeech: 'verb'
//   },
//
//   {
//     word: 'spearheaded',
//     partOfSpeech: 'verb'
//   },
//   {
//     word: 'independently',
//     partOfSpeech: 'adverb'
//   }
//
//
// ]
//


//
// document.addEventListener('DOMContentLoaded', () => {
//
//
//   const form = document.querySelector('.create')
//   const current = document.querySelector('.current')
//   const pro = document.querySelector('.writing')
//   const ed = document.querySelector('.new')
//
//
//
//   const handleChange = (e) => {
//     const nodeArray = [...document.querySelectorAll('[class*="new-word-"]')]
//     // nodeArray[0,nodeArray.length-1].forEach(node => node.remove())
//     // console.log(nodeArray)
//     const getTextEnd = (textend) => {
//       const newword = document.createElement('span')
//       if(e.keyCode === 32){
//         newword.innerText = textend + ' '
//         console.log(textend)
//         // console.log(textend, 'new word' , newword)
//
//         pro.append(newword)
//
//         newword.classList.add(`new-word-${textend}`)
//       }
//
//     }
//
//
//
//     let text = e.target.value
//     text = text.split('.').join('')
//     text = text.split(' ')
//     const textend = text[text.length - 1]
//     // console.log(text)
//     current.innerHTML = textend
//     if(e.keyCode === 32){
//
//
//       getWordType(textend)
//
//     }
//     getTextEnd(textend)
//
//     // console.log(text.reverse()[0])
//     // text = text.reverse()
//
//   }
//
//
//
//   // function  makeArray (newWord)  {
//   //
//   //   const words = document.querySelectorAll('.writing')
//   //
//   //
//   //
//   // }
//   //
//
//
//   const changeWord = (text, joined) => {
//     console.log(text)
//
//
//     // const textArray = text.split('')
//     // const textEnd = textArray.slice(-3)
//     // const joined = textEnd.join('')
//     console.log('joined', joined, joined.slice(1))
//
//     let newWord = ''
//     if (joined === 'ing') {
//
//       newWord = 'striving'
//
//     } else if (joined.slice(1) === ('ed') ) {
//
//       newWord = 'detail oriented'
//
//     } else if (joined.slice(1) === ('er') ) {
//
//       newWord = 'team player'
//
//     } else newWord = text
//
//     ed.innerText = newWord
//
//     setTimeout(function() {
//       change(newWord, text)
//     }, 1000)
//
//
//     console.log('changing', newWord)
//
//     // old.innerText = newWord + ' '
//     // makeArray(newWord)
//
//
//
//
//
//
//
//   }
//
//   const change = (newWord, text) => {
//     const old = document.querySelector(`.new-word-${text}`)
//     console.log(old)
//
//     old.innerText = newWord + ' '
//
//   }
//
//
//   const getWordType = (text) => {
//
//     const textArray = text.split('')
//
//     const textEnd = textArray.slice(-3)
//
//     const joined = textEnd.join('')
//     // console.log(joined)
//     changeWord(text, joined)
//   }
//
//   form.addEventListener('keydown', handleChange)
//
//
//
//
//
//
//
// })
