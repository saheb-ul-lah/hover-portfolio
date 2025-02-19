// import React from 'react'
import TextParallaxContent from '../components/TextParallaxContent'
import ASCIIText from '../Reactbits/ASCIIText/ASCIIText.jsx'
const Works = () => {
  return (
    <>
      {/* <div>Works</div> */}
      <ASCIIText
        text='My Works'
        enableWaves={true}
        asciiFontSize={4}
      />
      <TextParallaxContent />
    </>
  )
}

export default Works