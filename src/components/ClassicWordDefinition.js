import React from 'react'
function ClassicWordDefinition({ word, phonetics, meanings }) {
  return (
    <>
      <div className="dictionary-content">
        <h2>{word}</h2>
        <h4>{phonetics[0].text} &nbsp; | &nbsp; {meanings[0].partOfSpeech}</h4>
        <h6>{meanings[0].definitions[0].definition}</h6>
      </div>
    </>
  )

}
export default ClassicWordDefinition