import React from 'react';
import Interactive from 'antwar-interactive';
import Container from '../container/container';
import SplashViz from '../splash-viz/splash-viz';
import Support from '../support/support';
import './splash-style';
import '../splash-viz/splash-viz-style';
import '../cube/cube-style';
import '../text-rotater/text-rotater-style.scss';

export default props => {
  let { page } = props;

  return (
    <div className="splash">
      <Interactive
        id="components/splash-viz/splash-viz.jsx"
        component={ SplashViz } />

      <div className="splash__section splash__section--dark">
        <Container>
          <div dangerouslySetInnerHTML={{
            __html: page.content
          }} />
        </Container>
      </div>

      <div className="splash__section">
        <Container>
          <h1>Support the Team</h1>

          <p>Through contributions, donations, and sponsorship, you allow webpack to thrive. Your donations directly support office hours, continued enhancements, and most importantly, great documentation and learning material!</p>

          <h2>Platin Sponsors</h2>
          <Support size="platin" minimum={ 50000 } type="sponsors" />

          <h2>Gold Sponsors</h2>
          <Support size="gold" minimum={ 10000 } maximum={ 50000 } type="sponsors" />

          <h2>Silber Sponsors</h2>
          <Support size="silber" minimum={ 2000 } maximum={ 10000 } type="sponsors" />

          <h2>Bronze Sponsors</h2>
          <Support size="bronze" maximum={ 2000 } type="sponsors" />

          <h2>Backers</h2>
          <Support type="backers" />

        </Container>
      </div>
    </div>
  );
};
