import React from 'react'
import './brand.css'

import Google from '../../Assets/google.png'
import Slack from '../../Assets/slack.png'
import Atlassian from '../../Assets/atlassian.png'
import Dropbox from '../../Assets/dropbox.png'
import Shopify from '../../Assets/shopify.png'

const Brand = () => {
  return (
    <div className='gpt3__brand section__heading'>
      <div>
        <img src={Google} alt='google' />
      </div>
      <div>
        <img src={Slack} alt='slack' />
      </div>
      <div>
        <img src={Atlassian} alt='atlassian' />
      </div>
      <div>
        <img src={Dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={Shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default Brand
