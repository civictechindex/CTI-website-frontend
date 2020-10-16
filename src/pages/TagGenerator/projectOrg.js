import React, { useState} from "react";
import useStyles from "./styles.js";
import ProjectInfo from "./projectInfo";


const ProjectOrg = ({value}) => {
const classes = useStyles();


const allOrgNames ={
  orgArray:["Open Democracy Lab","Code for All","Code for America","Code for Anchorage","Code for Phoenix","Code for Tucson","Code for Fresno","Code for Sacramento","Code for San Francisco","Code for San Jose","Code for Sonoma County","Hack for LA Brigade","Open Oakland","Open San Diego","Open Walnut Creek","OpenSMC","Code for Boulder","Code for Denver","Code for Fort Collins","Code for Connecticut","Open Data Delaware","Code for DC","Code for Fort Lauderdale","Code for Miami","Code for Orlando","Code for Tallahassee","Code for Tampa Bay","Code for Atlanta","Open Savannah","Code for Hawaii","Code for Boise","Code for Chicago","Code for Bloomington","Code for Indianapolis","Hack Michiana","Code for Iowa","Code for Kentuckiana","Code for New Orleans","Open Maine","Code for Baltimore","Code for Boston","Code for Lansing","Open Twin Cities","KC Digital Drive","OpenSTL","Code for Montana","Code for Las Vegas","Code for New Hampshire","Code for Hackensack","Code for Jersey City","Code for Newark","Code for ABQ","BetaNYC","Code for Buffalo","Code for Syracuse","Code for Asheville","Code for Cary","Code for Chapel Hill","Code for Durham","Code for Greensboro","Open Charlotte Brigade","Open NC Collaborative","Open Raleigh Brigade","Code for Dayton","Open Cleveland","Open Toledo","OpenColumbus (Ohio)","Code for Muskogee","Code for Tulsa","Code for PDX","Open Eugene","Code for Philly","Code for Pittsburgh","Code for Puerto Rico","Code Island","Code for Greenville","Code for Nashville","Code for BCS","Code for Dallas","Open Austin","Sketch City (Houston)","Code for Utah","Code for BTV","Code for Charlottesville","Code for Hampton Roads","Code for New River Valley","Open Seattle","Code for Milwaukee","Code for Canada","Civic Tech Toronto","Beta City YEG","Ottawa Civic Tech","Civic Tech London","Civic Tech Waterloo Region","Civic Tech Fredericton","Civic Tech Vancouver","Civic Tech YYC","Open North","Data for Good Ottawa","Data for Good Vancouver","Data for Good Montréal","Data for Good Toronto","Data for Good Calgary","OpenDataBC","Code for Japan","Code for Tokyo ","Code for Sapporo ","Code for Hakodate ","Code for Muroran ","ハウモリ ","Code for Aomori ","Code for Shiogama ","Code for Sendai ","Code for Akita ","Code for Aizu ","Code for Shirakawa ","コード・フォー・イバラキ ","Code for Saitama ","Code for Kumagaya ","Code for TODA ","Code for WAKO ","Code for Ichikawa ","Code for Chiba ","Code for NAGAREYAMA ","Code for Funabashi ","Code for Matsudo ","Code for Shinagawa ","Code for Suginami ","Code for Setagaya ","Code for Chuo ","Code for Toshima ","Code for 中野 ","Code for Nerima ","Code for INAGI ","Code for Tachikawa ","Code for Chofu ","Code for Fuchu ","Code for Hachioji ","Code for Kanagawa ","Code for Kawasaki (オープン川崎)  ","Code for Yokosuka ","Code for YOKOHAMA ","Code for Niigata ","コードフォー高岡 ","コード・フォー・トヤマシティ ","Code for Nanto ","Code for Kanazawa ","Code for Sabae ","Code for Gifu ","Code for ふじのくに ","Code for Aichi ","Code for Nagoya ","Code for MIKAWA ","Code for Shiga / Biwako","Code for Kusatsu ","Code for Osaka ","Code for Sakai ","Code for Hyogo ","Code for Amagasaki ","Code for Kobe ","Code for Sasayama ＋ Tamba ","Code for Harima ","Code for Nara ","Code for Ikoma ","CODE for YAMATOKORIYAMA ","コードフォー島根 ","Code for Kurashiki ","Code for Hiroshima ","Code for Fukuyama ","Code for Ube ","Code for Tokushima ","Code for DOGO ","Code for Fukuoka ","Code for Kitakyushu ","Code for KURUME ","Code for Saga ","Code for Beppu ","Code for MIYAZAKI ","Code for Okinawa ","Code for Adachi ","Code for Gumyoji ","Code for Yamanashi ","Code for Toyota ","Code for SUSONO ","Code for 選挙 ","Code for Youth ","Code for Cat ","Code for Africa","Code for Cameroon","Code for Ghana","Code for Kenya","Code for Morocco","Code for Nigeria","Code for Uganda","Code for Sierra Leone","Code for Salone","Code for Tanzania","Code for Australia","Code for Germany","OK Lab Berlin","OK Lab Bielefeld","OK Lab Bonn-Rhein-Sieg","OK Lab Chemnitz","OK Lab Dresden","OK Lab Düsseldorf","OK Lab Gießen","OK Lab Frankfurt","OK Lab Hamburg","OK Lab Hannover","OK Lab Heidelberg","OK Lab Heilbronn","OK Lab Jena","OK Lab Karlsruhe","OK Lab Köln","OK Lab Leipzig","OK Lab Magdeburg","OK Lab Mecklenburg-Vorpommern","OK Lab München","OK Lab Münster","OK Lab Niederrhein","OK Lab Osnabrueck","OK Lab Potsdam","OK Lab Ruhrgebiet","OK Lab Kreis Schleswig-Flensburg","OK Lab Stuttgart","OK Lab Ulm","OK Lab Wuppertal","ePaństwo Foundation","Code for Poland","Code for Pakistan","Code for Romania","Code for Bacau","Code for Brasov","Code for București","Code for Chisinau","Code for Cluj-Napoca","Code for Constanta","Code for Craiova","Code for Diaspora","Code for Iași","Code for Oradea","Code for RmValcea","Code for Sibiu","Code for Suceava","Code for Timisoara","Code for TgMures","OpenUp","SlashRoots Foundation","Code for NL","Codeando México","g0v.tw","Code for France","Open Heroines France","Ciudadanía Inteligente","mySociety","Civic Tech Sweden","Civictech Goteborg","Civictech Stockholm","Civictech Uppsala","Open Data Kosovo","Sinar Project","Waag","Open Knowledge Belgium","Code for Moldova"]
}

const [suggestions, setSuggestions] = useState([]);
const [orgName,setOrgName] = useState("");
const [showProjInfo, setShowProjInfo] = useState(false);

 const onTextChanged = (e) => {
  const value = e.target.value;
  let matchSuggestions = [];
  if(value.length > 0){
    const regex = new RegExp(`^${value}`,'i');
    matchSuggestions = allOrgNames.orgArray.sort().filter(v =>regex.test(v));
  }

      setSuggestions([...matchSuggestions]);
      setOrgName(value);
  
}

const suggestionSelected = (value) => {
  setOrgName(value);
  setSuggestions([]);
  setShowProjInfo(true);
}

const renderSuggestions = () =>{
  const copySuggestions = [...suggestions]
  if(copySuggestions.length === 0){
    return null;
  }
return(
  <div>
  <ul className={classes.autoCompleteUl} >
    {copySuggestions.map((orgName) => <li className={classes.autoCompleteLi} onClick ={() => suggestionSelected(orgName) }>{orgName}</li>)}
  </ul>
  </div>
)
}

return(
  <div className={classes.autoCompleteText}>
  <p className={classes.pStyle}>Which Organization?</p>
  <input className={classes.textBox} type="text" name="org" value = {orgName} onChange = {(e) => onTextChanged(e)} />
  {renderSuggestions()}
  {showProjInfo ? <ProjectInfo /> : null}
  
  </div>
);

};


export default ProjectOrg;