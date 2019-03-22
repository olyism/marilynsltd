import React from 'react'

const year = new Date().getFullYear();

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      &copy; Marilyns Limited { year }
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
