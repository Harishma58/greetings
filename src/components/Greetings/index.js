import {Component} from 'react'
import DisplayGreeting from '../DisplayGreeting'
import LanguageButtons from '../LanguageButtons'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getActiveGreeting = () => {
    const {activeTabId} = this.state
    const result = languageGreetingsList.filter(each => each.id === activeTabId)
    return result
  }

  render() {
    const {activeTabId} = this.state
    const activeGreeting = this.getActiveGreeting()
    return (
      <div className="bg-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-cont">
          {languageGreetingsList.map(each => (
            <LanguageButtons
              key={each.id}
              languageButton={each}
              clickTab={this.onClickTabId}
              isActive={activeTabId === each.id}
            />
          ))}
        </ul>
        <div>
          {activeGreeting.map(eachLanguage => (
            <DisplayGreeting key={eachLanguage.id} language={eachLanguage} />
          ))}
        </div>
      </div>
    )
  }
}
export default Greetings
