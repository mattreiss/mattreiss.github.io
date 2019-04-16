import logo from '../../assets/svg/logo.svg';

let Images = {};

Images.logo = logo;

Images.list = [
  "https://drscdn.500px.org/photo/62650705/q%3D80_m%3D1500/v2?user_id=4438962&webp=true&sig=bbd87170c591331b79966d23b9d77428563ce33ae41b75670d7f30ee58b3caaf",
  "https://drscdn.500px.org/photo/72708255/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=83681fd8d1d54ed7a332e7598e0cd9b0a831490c41384c8ff49de51154d98ab0",
  "https://drscdn.500px.org/photo/72708261/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=fa19fc00005673ed7f0c66280c6146b0e9c6d3e9f27a328eadb38989af117c56",
  "https://drscdn.500px.org/photo/74312919/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=a8cbd53b6e9de68d0345b4859fe977c883334f648f033b2775bbcb59648ad970",
  "https://drscdn.500px.org/photo/84513811/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=96b0996a29cec15552de0bb4c257a074c8ebdff61a339dba3aee7d769d723d13",
  "https://drscdn.500px.org/photo/103812751/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=ab4dec612f662646b91f665bc9f1883e6ba454a5595bd7ab22898eb2df2e67ba",
  "https://drscdn.500px.org/photo/108201407/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=c7d870f7a10fe494fe8fa2d3a966e138458f6e0dc9e58f6e7c1182ce07076e88",
  "https://drscdn.500px.org/photo/110030925/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=e05900e8c41bd5c95aa37a147ed1ecdfc6f462dc3987961c9842f8661e59b278",
  "https://drscdn.500px.org/photo/111533195/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=c3788601b5b8a845f8d6c270dbaa47ddd892356978440bbf987b18ab4e779957",
  "https://drscdn.500px.org/photo/111533197/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=0cf60b49a0975c558fe4b196ab493d101a60cfd03aa27498a4b5d2e6b1196b16",
  "https://drscdn.500px.org/photo/113059963/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=a319e38271791b0eecdc2f0283490eb7176befd5b00b211b9bbe3c7af0617844",
  "https://drscdn.500px.org/photo/131586751/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=973af2c82a7fca382d6da7b1db51df8e97c7effa279f9dc33d05c89396d96a27",
  "https://drscdn.500px.org/photo/139786731/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=40127b3210b591905f04e85a261498074411665cb9d70dfc1cc48970914efe15",
  "https://drscdn.500px.org/photo/144201121/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=1f29d831c78b2995a6a37bec942fe1a46761627c57900b6e2a289ec0ca11ff8a",
  "https://drscdn.500px.org/photo/146709585/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=3871bee4fafedbc092c291a20f97460cbbb6c4b25160111843ac0ad280138ec9",
  "https://drscdn.500px.org/photo/147362183/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=f33b44f9802dfea3480dce0ddb1060f44a44126af35c085fefdd7e295fa91822",
  "https://drscdn.500px.org/photo/211319669/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=cde12764e7f77f29d3b185c89c5471567d5d583eafbf3148b09b9c06f6c72d10",
  "https://drscdn.500px.org/photo/212287057/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=73967e79a60dabb2549f7c2d940c863be58df894421beae7a089e9d6df07add1",
  "https://drscdn.500px.org/photo/212530705/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=6c3e34987e7f6ebc1cbea563b04675613182c15fc5c920abe7b0f2de6b2dd51a",
  "https://drscdn.500px.org/photo/212530729/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=e835dcb920a6f133828c0557309641d5cff4427c8b50daacf6a3aa6d1b5f390e",
  "https://drscdn.500px.org/photo/213832747/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=47b02c5f2fdd40ac5b6c64d93f5a2dd5d82889f2090bd20cbf02f8d30c7137af",
  "https://drscdn.500px.org/photo/213833141/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=f44d058622792dde99c3365908db7bc805f336db8174df1fcc361278b6fa0b7e",
  "https://drscdn.500px.org/photo/220558079/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=a7395c20f7ea533cc84a5cf71222f85a0307b9c7b6277a00e1b4b54b939c22d4",
  "https://drscdn.500px.org/photo/265982441/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=eebaf99b03205de7d4cd7fabe77a90b693861a7c385c2ffa1251c6ea4bd6516d",
  "https://drscdn.500px.org/photo/265982443/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=e8226ee6a69a478959577905beb0c6dc5a1c6b8c703ed78173fbdd351a806b81",
  "https://drscdn.500px.org/photo/287634029/q%3D80_m%3D1500/v2?user_id=4438962&webp=true&sig=2d5c6c6b850559a096c03d8e854a6cdf44e003c7f84c1d5083624362f1f60866",
  "https://drscdn.500px.org/photo/287634145/q%3D80_m%3D1000/v2?user_id=4438962&webp=true&sig=1af33718cfa08c3d4ea9571c18f489062abe0c03c4c96e3afc31695f0a58ddd7"
];

export default Images;
