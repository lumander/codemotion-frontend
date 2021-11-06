import 'carbon-components/scss/globals/scss/styles.scss';

import React, { Component } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import '../styles/App.scss';

class App extends Component {

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header-sup">
            <h1 className="App-title-sup">
            Codemotion Demo
            </h1>
          </header>
          <header className="App-header">
            <h1 className="App-title">
            RedHat OpenShift: CI/CD pipelines into the Service Mesh
            </h1>
          </header>
          <p className="App-intro">
          <span aria-label="Hand wave" role="img">
                  👋{' '}
                </span>{' '}
                           Welcome!                 
            <span aria-label="Hand wave" role="img">
                  👋{' '}
                </span>{' '}
          </p>
        </div>
        <article className="App__demo">
          <h3 className="App__demo-title">Tech Stack</h3>
          <Accordion>
            <AccordionItem title="RedHat OpenShift@IBM Cloud">
                <a href="https://docs.openshift.com/container-platform/4.6/welcome/index.html">
                  <p >
                   OpenShift 4.6 doc
                  </p>
                </a>
            </AccordionItem>
            <AccordionItem title="Tekton">
            <a href="https://tekton.dev/">
                  <p >
                   Tekton project homepage
                  </p>
                </a>
            </AccordionItem>
            <AccordionItem title="Istio">
            <a href="https://istio.io/">
                  <p >
                  Istio project homepage
                  </p>
                </a>
            </AccordionItem>
            <AccordionItem title="Helm">
            <a href="https://helm.sh/">
                  <p >
                  Helm project homepage
                  </p>
                </a>
            </AccordionItem>
          </Accordion>
        </article>
      </>
    );
  }
}

export default App;