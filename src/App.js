import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div style={{margin:0,background:'#ffffff'}}>
    <input type="hidden" id="anPageName" name="page" value="index" />
    <div className="container-center-horizontal">
      <div className="index screen">
      <Home />

        <div className="overlap-group4">
          <div className="group-310">
           
           
            
            
           
            <footer className="footer">
              <div className="flex-row-7">
                <div className="flex-row-8">
                  <div className="flex-col-6 flex-col-10">
                    <div className="discover inter-medium-gray-15-8px">Discover</div>
                    <p className="work-services-about inter-medium-gray-10-5px">
                      Work <br />Services <br />About <br />Blog Archive<br />Contact Us
                    </p>
                  </div>
                  <div className="flex-col-7 flex-col-10">
                    <div className="find-us-on inter-medium-gray-15-8px">Find Us On</div>
                    <div className="flex-row-9">
                      <img
                        className="frame-313"
                        src="footer/Frame 313.png"
                        anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/frame-313-2.svg"
                        alt="Frame 313"
                      />
                      <div className="facebook-instagram-y inter-medium-gray-10-5px">
                      Facebook<br />Instagram<br />Youtube<br />LinkedIn<br />Twitter
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col-8 flex-col-10">
                  <p className="interested-in-keepin inter-medium-gray-10-5px">
                    Interested in keeping up-to-date about the latest in design trends in Manchester, England? We’ve got
                    you covered.
                  </p>
                  <div className="overlap-group-4">
                    <div className="enter-email-address-here inter-medium-gray-15-8px">Enter Email Address Here</div>
                    <img
                      className="vector-2"
                      src="footer/Vector (4).png"
                      anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/vector-7.svg"
                      alt="Vector"
                    />
                  </div>
                  <p className="by-subscribing-to-ou">
                    By subscribing to our newsletter you agree to our privacy policy and will get commercial
                    communication.
                  </p>
                </div>
              </div>
              <div className="flex-col-9 flex-col-10">
                <div className="group-315">
                  <div className="group-314">
                    <div className="technologies-we-use inter-medium-gray-15-8px">Technologies We Use</div>
                    <img
                      className="group-313"
                      src="/footer/Group 313.png"
                      anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/group-313-2.png"
                      alt="Group 313"
                    />
                  </div>
                  <div className="frame-76">
                    <p className="schedule-a-free-discovery-session-2 inter-medium-mine-shaft-10-5px">
                      Schedule A Free Discovery Session
                    </p>
                    <img
                      className="subtract-4"
                      src="footer/Subtract (1).png"
                      anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/subtract-21.svg"
                      alt="Subtract"
                    />
                  </div>
                </div>
                <img
                  className="line-31"
                  src="footer/Line 31.png"
                  anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/line-31-2.svg"
                  alt="Line 31"
                /> 
                <div className="flex-row-10">
                  <div className="group-234">
                    <div className="level8-digital">Level8Digital</div>
                    <div className="text-2 text">®</div>
                  </div>
                  <p className="copyright-2022-leve inter-medium-gray-10-5px">
                    Copyright ©2022 level8digital.com. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <img
            className="rectangle-257"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            anima-src="https://cdn.animaapp.com/projects/655b5c17f4acb9cb5701b449/releases/655c39a6ae9ea9179a5e5b85/img/rectangle-257.svg"
            alt="Rectangle 257"
          />
          
        </div>
      </div>
    </div>
    {/* <script>
      isHidden = function (e) {
        if (!(e instanceof HTMLElement)) return false;
        if (getComputedStyle(e).display == "none") return true;
        else if (e.parentNode && isHidden(e.parentNode)) return true;
        return false;
      };

      loadAsyncSrcForTag = function (tag) {
        var elements = document.getElementsByTagName(tag);
        var toLoad = [];
        for (var i = 0; i < elements.length; i++) {
          var e = elements[i];
          var src = e.getAttribute("src");
          var loaded =
            src != undefined &&
            src.length > 0 &&
            src != "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
          if (loaded) continue;
          var asyncSrc = e.getAttribute("anima-src");
          if (asyncSrc == undefined || asyncSrc.length == 0) continue;
          if (isHidden(e)) continue;
          toLoad.push(e);
        }
        // Top first
        toLoad.sort(function (a, b) {
          return getTop(a) - getTop(b);
        });
        for (var i = 0; i < toLoad.length; i++) {
          var e = toLoad[i];
          var asyncSrc = e.getAttribute("anima-src");
          e.setAttribute("src", asyncSrc);
        }
      };

      pauseHiddenVideos = function (tag) {
        var elements = document.getElementsByTagName("video");
        for (var i = 0; i < elements.length; i++) {
          var e = elements[i];
          var isPlaying = !!(e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2);
          var isHiddenStatus = isHidden(e);
          if (!isPlaying && !isHiddenStatus && e.getAttribute("autoplay") == "autoplay") {
            e.play();
          } else if (isPlaying && isHiddenStatus) {
            e.pause();
          }
        }
      };

      loadAsyncSrc = function (tag) {
        loadAsyncSrcForTag("img");
        loadAsyncSrcForTag("iframe");
        loadAsyncSrcForTag("video");
        pauseHiddenVideos();
      };

      var getTop = function (e) {
        var top = 0;
        do {
          top += e.offsetTop || 0;
          e = e.offsetParent;
        } while (e);
        return top;
      };

      // On load
      loadAsyncSrc();

      // On resize
      old_onResize = window.onresize;
      new_onResize = undefined;

      updateOnResize = function () {
        if (new_onResize == undefined || window.onresize != new_onResize) {
          new_onResize = function (x) {
            if (old_onResize != undefined) old_onResize(x);
            loadAsyncSrc();
          };
          window.onresize = new_onResize;
          // Make sure not overriden
          setTimeout(function () {
            updateOnResize();
          }, 3000);
        }
      };
      updateOnResize();

      // IE
      setTimeout(function () {
        loadAsyncSrc();
      }, 200);
    </script> */}
    </div>
  );
}

export default App;
