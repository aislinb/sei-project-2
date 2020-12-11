import React from 'react'

function UrbanWordDefinition({ list }) {
  return (
    <>
      <div className="dictionary-content">
        <h2>{list[0].word}</h2>
        <h2 className="subtitle">🔞</h2>
        <h4>{list[0].definition}</h4>
        {list.map((meaning, index) => (
          <div key={index}>
            {meaning.definition} <br />
            <div><br/></div>
            {meaning.example ?
              (<div> Example: {meaning.example} </div>) 
              :
              <div></div>}
            <div><br/></div>
            <div>***</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default UrbanWordDefinition