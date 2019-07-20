import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import { ScreenView } from '../Views';
import { FormNavigator } from '../Navigators';
import { MainActions } from '../../Redux/Actions';
// import Theme from '../../Themes';

// current followers = 627
// after following 400, followers =

class WebCrawlerScreen extends React.Component {
  state = {
    connected: false,
    loading: false,
    username: ""
  }

  componentDidMount() {
    var socket = io('http://localhost:1338');
    socket.on('connect', () => {
      console.log("connected");
      this.setState({connected: true,})
    });
    socket.on('result', (result) => {
      console.log("result ", result);
      console.log("resultJSON ", JSON.stringify(result.result));
      this.result = result.result;
    });
    socket.on('disconnect', () => {
      console.log("disconnected");
      this.setState({connected: false})
    });
    let { directory } = this.props.main;
    this.props.list(directory);
  }

  onClickLogin = () => {
    // this.props.runWebCrawler("login", {
    //   "username": "mattreiss",
    //   "password": "p0p0p0"
    // });
    this.props.ig("login", {
      "username": "mattreiss",
      "password": "p0p0p0"
    });
  }

  onClickGetFollowers = () => {
    if (!this.state.username) return alert("missing username");
    this.result = null;
    // this.props.runWebCrawler("getFollows", {
    //   "username": this.state.username,
    //   "isFollowers": true
    // });
    // this.waitForResult(this.onClickFollowAndLike)


    this.props.ig("getFollowers", {
      "getFollowing": true,
      "shouldFollow": true,
      "shouldLikePosts": true,
      "timeout": 10000,
      "limit": 400,
      "username": this.state.username
    });
    this.waitForResult(() => alert("finished!"));
  }

  waitForResult = (cb) => {
    if (this.result) return cb();
    setTimeout(() => this.waitForResult(cb), 1000);
  }

  onClickFollow = () => {
    // let list = this.getFollowList();
    // let size = 0;
    // for (let item in list) {
    //   size++;
    //   setTimeout(() => this.props.runWebCrawler("follow", {
    //     "username": item,
    //     "shouldUnfollow": false
    //   }), 10000 * size);
    // }
  }

  onClickFollowAndLike = () => {
    // let list = this.result || this.getFollowList();
    // let size = 0;
    // for (let item in list) {
    //   setTimeout(() => this.props.runWebCrawler("follow", {
    //     "username": item,
    //     "shouldUnfollow": false,
    //     "shouldLikePosts": true
    //   }), 30000 * size);
    //   size++;
    // }
  }

  onClickUnfollow = () => {
    // let list = this.getUnfollowListPk();
    // let size = 0;
    // for (let item in list) {
    //   size++;
    //   console.log("unfollowing ", item);
    //   setTimeout(() => this.props.runWebCrawler("follow", {
    //     "username": item,
    //     "shouldUnfollow": true
    //   }), 10000 * size);
    // }

    this.result = null;
    let originalFollowing = this.getOriginialFollowing();
    this.props.ig("getFollowers", {
      "getFollowing": true,
      "timeout": 500,
      "limit": 100,
    });
    this.waitForResult(() => {
      let size = 0;
      this.result.forEach(p => {
        if (!originalFollowing[p.pk]) {
          size++;
          console.log("unfollowing ", p.username);
          setTimeout(() => this.props.runWebCrawler("follow", {
              "username": p.username,
              "shouldUnfollow": true
            }), 10000 * size);
        }
      });
    });
  }

  onClickLike = () => {
    // let list = this.getFollowList();
    // let size = 0;
    // for (let item in list) {
    //   size++;
    //   setTimeout(() => this.props.runWebCrawler("likePosts", {
    //     "username": item,
    //     "shouldUnfollow": false
    //   }), 20000 * size);
    //
    // }
  }

  getOriginialFollowing = () => {
    return {"396550":"gabyishh","787132":"natgeo","996129":"samalive","1382083":"yoyofactorypaul","1556504":"jacobzjammerz","1880145":"mikeolbinski","2261508":"catman_ooo","2431944":"kellyhart","3063067":"chrisxd","3124368":"downsouthinhell","3365817":"ernesto__cid","3551162":"b_yoshi","3564704":"darylangel","3583907":"wes_tonascia","3630311":"insta_stephen","3633199":"jonnguyen","3887759":"zackwallin","4077543":"chrisroberts","4083606":"shanejoneill","4170046":"transworldskate","4389846":"niceenoughguy","4649121":"murktwain_","4670628":"kylecamarillo","4702235":"andrewreynolds","4721025":"jimmychin","5487604":"debase","5697283":"astallasatree","6060434":"tokyo_school_girls","6526814":"pajamers_rvk","6662463":"weersimons","6766106":"savvysavsav","6770241":"jasenh","7305653":"shainblumphotography","7361399":"adam_becerra","7744972":"marksuciu","8094200":"motzek","8120717":"j_____c____","8559032":"thrashermag","8568364":"habitatskateboards","8568964":"pattondesign","8598246":"roasted_like_ever","8725415":"justincolvin","9073248":"shaunbap","9227869":"patrickbeaudouin_razr","10031821":"daewon1song","10342061":"wynnnojo","10457699":"davisd","10974859":"louiebarletta","11522830":"ladzinski","11574712":"etniesskateboarding","12146801":"blueturner","12568627":"408eddie","12816465":"miguel_valle","13469403":"bluegrotto","14028231":"internetfamous","14565515":"samuelashley","14781932":"joey_guevara","14991546":"leyymo","15005072":"myspacetom","15257208":"falcor408","15259228":"tyler_stevens___","15898936":"faithwell","16785545":"domneez","17544538":"pettigrewphoto","22121083":"tara_anguiano","22468498":"atlantic_drift","23334587":"poobert","23550917":"lamb_handle","24971666":"alexandriaslens","25750348":"olsonphoto","25807504":"mnstr048","26348372":"visforvice","26757321":"jessiejinxed","27876449":"sls","30947293":"c0nreezy","31369975":"davetroup","31451837":"cristinamittermeier","34331740":"nrose300","34620032":"mizznation","34773951":"sarathebarefoot","35225156":"fnant_","36757699":"jayroyball","39078875":"kea__smith","40462740":"keelyjaramillo","42876065":"nick.ben","42890662":"qtionmarc","43811265":"williamstrobeck","46866583":"jes.si.kuh","48182595":"mrkeepemlit","49114585":"gx1000","49972745":"christiana.means","52298996":"stephenwilkes","143989644":"shotbysalt","174998002":"_astroalex","175389323":"johnnystress","177119349":"nothingbutnosejams","179950527":"atlasskateboarding","182587970":"kristopher.garcia","184386785":"rachstewartnz","187343449":"canon_photos","195976455":"paulnicklen","196232075":"whoisrupesh","196817890":"robertevans_","196994193":"mydetoxtravel","202856280":"afoodiesdiary","209162595":"physicsfun","212000793":"abrahammayorga","217206127":"marcjohnson","221067651":"angelortegaaa","224520826":"antonio_4o8","225192804":"madison.a01","225543018":"cult45","226298987":"tungkidz","232394693":"saatchiphoto","232953916":"sweater_puppy","233388452":"shaykimiko","249395655":"vago_mode","262558535":"wastedyouth1986","276772193":"nick.ff","278155958":"master_gallery","283891710":"jazzleeb","299552461":"6esociety86","317070878":"garydabear","321992501":"tiltmodearmy","332819024":"t0mkn0x","341690754":"whyidontskateboard","342167595":"beaccchhoussse","353644718":"codygkeepemlit","367264440":"jasonweingart","371260162":"potatounit","387444753":"ehbugga","394363369":"glaciernps","397268041":"itsmitch.pdx","399174061":"dayography","426637589":"daseestarr","437382561":"str33ttaco","442530884":"bfay3","461426973":"franslanting","463380968":"fuckingawesome","472746603":"4x4wheeler","476634054":"divine.expressions1008","482349106":"ivandivine","489749622":"tyler26f","508680534":"enjoi","536491165":"keepemlit","538540634":"yutohorigome","557235927":"kislikkk","566301286":"oviquez408","573555568":"keifercheefer","580203519":"chadburnr","581903148":"l0v3lylynn","645386640":"dielonconstantine","730811783":"rollersurfer","758577478":"_danktank","789230703":"yosemitenps","821364763":"nimamassoumi","862233960":"paper_skaters","917412357":"rickandmorty","924361337":"_kennygoodman","1087101046":"thisdelish","1133865714":"rockynps","1134073703":"bigdaddybrian1221","1140476545":"_skatendestroy","1163583881":"sulkyreenie","1187036247":"justin_anguiano","1246217945":"brianlalament","1298902100":"khruangbin","1371408106":"sonyvx1000","1410302035":"claro.kc","1449924586":"jacobelliottharris","1488131900":"cjcox6983","1509609240":"areej1717","1533619408":"erinbabnikphotography","1545320650":"connorrwalshh","1548007664":"_kristopherg_","1552997022":"mattiasklumofficial","1565107527":"yellowstonenps","1594923886":"cas_primos","1631582211":"prasadsudame","1633109941":"woahnicky1911","1635859490":"jakeanaya_","1649944114":"justincastignani","1698898069":"erica.cross","1713644003":"heatherhilife","1815383251":"trickreport","1822541762":"freeskatemag","1980751233":"cloudzdelight","1980946246":"habitatnworkshop","2007938425":"nationalparkgeek","2018754484":"castlebolts","2054933620":"dickiesskate","2057072582":"kookslams","2076097975":"spliffpackzack","2127940953":"oli_beag","2234772197":"lassedesignen","2262493300":"longexposure_shots","2262865366":"amateurastrophotographyezine","2272028618":"vixenvermin","2296117702":"tinderskatespots","2308173885":"asphaltposerclub","2908444282":"nightskape","2935767272":"developers_team","3029080609":"mathdiscussion","3034516995":"_sidmaze_","3042547068":"milkywaychasers","3055809951":"chadburnron","3107478451":"marty_mcflyyyy","3141466457":"s_e_d_7_7","3149973182":"judychadburn","3191597981":"ioanoan","3246646582":"ronwel_92","3259154265":"yajecate","3263710210":"thenineclub","3264932615":"rendezvous_skateparks","3298925731":"axiomsix","3631636132":"mvpscua","3648460530":"wryguyryan","3655338948":"tekin","3664076922":"manramp","4291444196":"skyaddic","13057290285":"down_2_die","6208577970":"thedeveloped","9012908410":"the_semisober_wizzard408","10977750910":"nick.rasmussen45","9633767139":"abbyjaramillo8","6872717127":"gabec408","5446965144":"_hollyrotten","5771133570":"sfrazer14","14488647325":"4u_skateboarding","6328102521":"kodidoingthings","5440686242":"chadburnjudy","7197246623":"sjskateboarding","4764815997":"christian_hartmann_photography","7634134181":"thenoinclub","7848037982":"mypersonal_world","9028308449":"astrovoyagers","5324165547":"everydayavacation","8438429192":"ig_milkyway","7305132655":"landscape_features_","7205584401":"toplongexposure","7945464554":"girlskateclips","7310410050":"night4view","4350827928":"paul.watson.photography","8292883786":"bestdarkphoto","11052766810":"camera_pros","6368723743":"nights_dreamworld","9190043901":"skatersdoingthings","5607409101":"milkywayshooters","5414359560":"girlswhocanskate","4919966354":"sukiicat","7942614813":"summerremmus_"}
  }

  renderConnectInstructions() {
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <h1>Server Not found</h1>
          <p>Please start the webrawler server</p>
        </div>
      </ScreenView>
    );
  }

  renderLoading() {
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <h1>Loading..</h1>
          <p>Please wait while photoshop processes</p>
        </div>
      </ScreenView>
    )
  }

  onChange = (data) => {
    this.setState(data);
    // this.props.onChange(data);
  }

  render() {
    if (!this.state.connected) return this.renderConnectInstructions();
    if (this.state.loading) return this.renderLoading();
    let {files, folders, directory} = this.props.main;
    return (
      <ScreenView>
        <div style={{marginTop: 100}}>
          <div>
            <TextField
              label="Username"
              value={this.state.username}
              onChange={e => this.onChange({ username: e.target.value})}
              type="text"
              InputLabelProps={{
               shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <button onClick={this.onClickLogin}>Login</button>
            <button onClick={this.onClickGetFollowers}>GetFollowers</button>
            <button onClick={this.onClickFollow}>Follow Profiles</button>
            <button onClick={this.onClickUnfollow}>Unfollow Profiles</button>
            <button onClick={this.onClickLike}>Like Posts</button>
            <button onClick={this.onClickFollowAndLike}>Follow Profiles And Like Posts</button>
          </div>
        </div>
      </ScreenView>
    );
  }
}

const mapStateToProps = (state) => {
  let { directory, folders, files } = state.main
  return {
    main: { directory, folders, files }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    runWebCrawler: (command, options) => dispatch(MainActions.runWebCrawler(command, options)),
    list: (directory) => dispatch(MainActions.list(directory)),
    ig: (command, options) => dispatch(MainActions.ig(command, options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebCrawlerScreen)
