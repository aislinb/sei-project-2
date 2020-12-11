import React from 'react'

function ClassicWordDefinition({  phonetics, meanings }) {
  return (
    <>    
      <div className="dictionary-content">
        <h2 id="title-font"> &nbsp; <em>{phonetics[0].text}</em></h2>
        <div className="definitions">
          {meanings.length > 0 ? 
            meanings.map((meaning, index) => (
              <div key={index}>
                <em>{meaning.partOfSpeech} &nbsp; :</em>
                <div><br/></div>
                {meaning.definitions.map(definition => (
                  <div key={definition.definition}>
                    {definition.definition}
                    <div><br/></div>
                    {definition.example ?
                      (<div> Example: {definition.example} </div>) 
                      :
                      <div></div>}
                    <div><br/></div>
                    <div>***</div>
                  </div>
                ))}
                <div><br/></div>
              </div>
            ))
            :
            <div>
              <br></br><i>We are cheapskates so the free dictionary that we are accessing does not have an entry for this word 😭 </i>
            </div>
          }
        </div>
      </div>
    </>
  )
}
export default ClassicWordDefinition