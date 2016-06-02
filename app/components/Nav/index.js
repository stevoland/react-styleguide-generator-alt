import React, { Component, PropTypes } from 'react'
import contents from '../../utils/contents'
import path from 'path'

export default class Nav extends Component {
  static displayName = 'SG.Nav'

  static propTypes = {
    ctx: PropTypes.object.isRequired
  }

  render () {
    let home = '/'

    if (window.config.base && window.config.base !== '') {
      home = window.config.base
    }

    return (
      <nav>
        <ul className='sg sg-nav'>
          <li className='sg' key={'home'}>
            <a
              className={`sg sg-nav-link`}
              href={home}
            >
              Show All
            </a>
          </li>

          {contents.navList.categories
            .map((category, i) => {
              let isSelectedCategory = this.props.ctx.params.category === category

              return (
                <li className='sg' key={i}>
                  <a
                    className={`sg category sg-nav-link ${isSelectedCategory ? 'is-selected' : ''}`}
                    href={window.config.hashbang
                        ? category
                        : path.join(home, category)}
                  >
                    {category}
                  </a>

                  <ul className='sg sg-sub-nav'>
                  {
                    contents.navList.components[category].map((component, j) => {
                      let isSelectedComponent = this.props.ctx.params.component === component

                      return (
                        <li key={j}>
                          <a
                            className={`sg sg-nav-link ${isSelectedComponent ? 'is-selected' : ''}`}
                            href={window.config.hashbang
                                ? path.join(category, component)
                                : path.join(home, category, component)}
                          >
                            {component}
                          </a>
                        </li>
                      )
                    })
                  }
                  </ul>
                </li>
              )
            })}
        </ul>
      </nav>
    )
  }
}
