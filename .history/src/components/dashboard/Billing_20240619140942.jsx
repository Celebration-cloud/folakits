import React from 'react'

function Billing() {
  return (
    <form cla="ui form">
  <h4 cla="ui dividing header">Shipping Information</h4>
  <div cla="field">
    <label>Name</label>
    <div cla="two fields">
      <div cla="field">
        <input type="text" name="shipping[first-name]" placeholder="First Name"/>
      </div>
      <div cla="field">
        <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
      </div>
    </div>
  </div>
  <div cla="field">
    <label>Billing Address</label>
    <div cla="fields">
      <div cla="twelve wide field">
        <input type="text" name="shipping[address]" placeholder="Street Address"/>
      </div>
      <div cla="four wide field">
        <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
      </div>
    </div>
  </div>
  <div cla="two fields">
    <div cla="field">
      <label>State</label>
      <select cla="ui fluid dropdown">
        <option value="">State</option>
    <option value="AL">Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="DC">District Of Columbia</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
      </select>
    </div>
    <div cla="field">
      <label>Country</label>
      <div cla="ui fluid search selection dropdown">
        <input type="hidden" name="country"/>
        <i cla="dropdown icon"></i>
        <div cla="default text">Select Country</div>
        <div cla="menu">
    <div cla="item" data-value="af"><i cla="af flag"></i>Afghanistan</div>
    <div cla="item" data-value="ax"><i cla="ax flag"></i>Aland Islands</div>
    <div cla="item" data-value="al"><i cla="al flag"></i>Albania</div>
    <div cla="item" data-value="dz"><i cla="dz flag"></i>Algeria</div>
    <div cla="item" data-value="as"><i cla="as flag"></i>American Samoa</div>
    <div cla="item" data-value="ad"><i cla="ad flag"></i>Andorra</div>
    <div cla="item" data-value="ao"><i cla="ao flag"></i>Angola</div>
    <div cla="item" data-value="ai"><i cla="ai flag"></i>Anguilla</div>
    <div cla="item" data-value="ag"><i cla="ag flag"></i>Antigua</div>
    <div cla="item" data-value="ar"><i cla="ar flag"></i>Argentina</div>
    <div cla="item" data-value="am"><i cla="am flag"></i>Armenia</div>
    <div cla="item" data-value="aw"><i cla="aw flag"></i>Aruba</div>
    <div cla="item" data-value="au"><i cla="au flag"></i>Australia</div>
    <div cla="item" data-value="at"><i cla="at flag"></i>Austria</div>
    <div cla="item" data-value="az"><i cla="az flag"></i>Azerbaijan</div>
    <div cla="item" data-value="bs"><i cla="bs flag"></i>Bahamas</div>
    <div cla="item" data-value="bh"><i cla="bh flag"></i>Bahrain</div>
    <div cla="item" data-value="bd"><i cla="bd flag"></i>Bangladesh</div>
    <div cla="item" data-value="bb"><i cla="bb flag"></i>Barbados</div>
    <div cla="item" data-value="by"><i cla="by flag"></i>Belarus</div>
    <div cla="item" data-value="be"><i cla="be flag"></i>Belgium</div>
    <div cla="item" data-value="bz"><i cla="bz flag"></i>Belize</div>
    <div cla="item" data-value="bj"><i cla="bj flag"></i>Benin</div>
    <div cla="item" data-value="bm"><i cla="bm flag"></i>Bermuda</div>
    <div cla="item" data-value="bt"><i cla="bt flag"></i>Bhutan</div>
    <div cla="item" data-value="bo"><i cla="bo flag"></i>Bolivia</div>
    <div cla="item" data-value="ba"><i cla="ba flag"></i>Bosnia</div>
    <div cla="item" data-value="bw"><i cla="bw flag"></i>Botswana</div>
    <div cla="item" data-value="bv"><i cla="bv flag"></i>Bouvet Island</div>
    <div cla="item" data-value="br"><i cla="br flag"></i>Brazil</div>
    <div cla="item" data-value="vg"><i cla="vg flag"></i>British Virgin Islands</div>
    <div cla="item" data-value="bn"><i cla="bn flag"></i>Brunei</div>
    <div cla="item" data-value="bg"><i cla="bg flag"></i>Bulgaria</div>
    <div cla="item" data-value="bf"><i cla="bf flag"></i>Burkina Faso</div>
    <div cla="item" data-value="mm"><i cla="mm flag"></i>Burma</div>
    <div cla="item" data-value="bi"><i cla="bi flag"></i>Burundi</div>
    <div cla="item" data-value="tc"><i cla="tc flag"></i>Caicos Islands</div>
    <div cla="item" data-value="kh"><i cla="kh flag"></i>Cambodia</div>
    <div cla="item" data-value="cm"><i cla="cm flag"></i>Cameroon</div>
    <div cla="item" data-value="ca"><i cla="ca flag"></i>Canada</div>
    <div cla="item" data-value="cv"><i cla="cv flag"></i>Cape Verde</div>
    <div cla="item" data-value="ky"><i cla="ky flag"></i>Cayman Islands</div>
    <div cla="item" data-value="cf"><i cla="cf flag"></i>Central African Republic</div>
    <div cla="item" data-value="td"><i cla="td flag"></i>Chad</div>
    <div cla="item" data-value="cl"><i cla="cl flag"></i>Chile</div>
    <div cla="item" data-value="cn"><i cla="cn flag"></i>China</div>
    <div cla="item" data-value="cx"><i cla="cx flag"></i>Christmas Island</div>
    <div cla="item" data-value="cc"><i cla="cc flag"></i>Cocos Islands</div>
    <div cla="item" data-value="co"><i cla="co flag"></i>Colombia</div>
    <div cla="item" data-value="km"><i cla="km flag"></i>Comoros</div>
    <div cla="item" data-value="cg"><i cla="cg flag"></i>Congo Brazzaville</div>
    <div cla="item" data-value="cd"><i cla="cd flag"></i>Congo</div>
    <div cla="item" data-value="ck"><i cla="ck flag"></i>Cook Islands</div>
    <div cla="item" data-value="cr"><i cla="cr flag"></i>Costa Rica</div>
    <div cla="item" data-value="ci"><i cla="ci flag"></i>Cote Divoire</div>
    <div cla="item" data-value="hr"><i cla="hr flag"></i>Croatia</div>
    <div cla="item" data-value="cu"><i cla="cu flag"></i>Cuba</div>
    <div cla="item" data-value="cy"><i cla="cy flag"></i>Cyprus</div>
    <div cla="item" data-value="cz"><i cla="cz flag"></i>Czech Republic</div>
    <div cla="item" data-value="dk"><i cla="dk flag"></i>Denmark</div>
    <div cla="item" data-value="dj"><i cla="dj flag"></i>Djibouti</div>
    <div cla="item" data-value="dm"><i cla="dm flag"></i>Dominica</div>
    <div cla="item" data-value="do"><i cla="do flag"></i>Dominican Republic</div>
    <div cla="item" data-value="ec"><i cla="ec flag"></i>Ecuador</div>
    <div cla="item" data-value="eg"><i cla="eg flag"></i>Egypt</div>
    <div cla="item" data-value="sv"><i cla="sv flag"></i>El Salvador</div>
    <div cla="item" data-value="gb"><i cla="gb flag"></i>England</div>
    <div cla="item" data-value="gq"><i cla="gq flag"></i>Equatorial Guinea</div>
    <div cla="item" data-value="er"><i cla="er flag"></i>Eritrea</div>
    <div cla="item" data-value="ee"><i cla="ee flag"></i>Estonia</div>
    <div cla="item" data-value="et"><i cla="et flag"></i>Ethiopia</div>
    <div cla="item" data-value="eu"><i cla="eu flag"></i>European Union</div>
    <div cla="item" data-value="fk"><i cla="fk flag"></i>Falkland Islands</div>
    <div cla="item" data-value="fo"><i cla="fo flag"></i>Faroe Islands</div>
    <div cla="item" data-value="fj"><i cla="fj flag"></i>Fiji</div>
    <div cla="item" data-value="fi"><i cla="fi flag"></i>Finland</div>
    <div cla="item" data-value="fr"><i cla="fr flag"></i>France</div>
    <div cla="item" data-value="gf"><i cla="gf flag"></i>French Guiana</div>
    <div cla="item" data-value="pf"><i cla="pf flag"></i>French Polynesia</div>
    <div cla="item" data-value="tf"><i cla="tf flag"></i>French Territories</div>
    <div cla="item" data-value="ga"><i cla="ga flag"></i>Gabon</div>
    <div cla="item" data-value="gm"><i cla="gm flag"></i>Gambia</div>
    <div cla="item" data-value="ge"><i cla="ge flag"></i>Georgia</div>
    <div cla="item" data-value="de"><i cla="de flag"></i>Germany</div>
    <div cla="item" data-value="gh"><i cla="gh flag"></i>Ghana</div>
    <div cla="item" data-value="gi"><i cla="gi flag"></i>Gibraltar</div>
    <div cla="item" data-value="gr"><i cla="gr flag"></i>Greece</div>
    <div cla="item" data-value="gl"><i cla="gl flag"></i>Greenland</div>
    <div cla="item" data-value="gd"><i cla="gd flag"></i>Grenada</div>
    <div cla="item" data-value="gp"><i cla="gp flag"></i>Guadeloupe</div>
    <div cla="item" data-value="gu"><i cla="gu flag"></i>Guam</div>
    <div cla="item" data-value="gt"><i cla="gt flag"></i>Guatemala</div>
    <div cla="item" data-value="gw"><i cla="gw flag"></i>Guinea-Bissau</div>
    <div cla="item" data-value="gn"><i cla="gn flag"></i>Guinea</div>
    <div cla="item" data-value="gy"><i cla="gy flag"></i>Guyana</div>
    <div cla="item" data-value="ht"><i cla="ht flag"></i>Haiti</div>
    <div cla="item" data-value="hm"><i cla="hm flag"></i>Heard Island</div>
    <div cla="item" data-value="hn"><i cla="hn flag"></i>Honduras</div>
    <div cla="item" data-value="hk"><i cla="hk flag"></i>Hong Kong</div>
    <div cla="item" data-value="hu"><i cla="hu flag"></i>Hungary</div>
    <div cla="item" data-value="is"><i cla="is flag"></i>Iceland</div>
    <div cla="item" data-value="in"><i cla="in flag"></i>India</div>
    <div cla="item" data-value="io"><i cla="io flag"></i>Indian Ocean Territory</div>
    <div cla="item" data-value="id"><i cla="id flag"></i>Indonesia</div>
    <div cla="item" data-value="ir"><i cla="ir flag"></i>Iran</div>
    <div cla="item" data-value="iq"><i cla="iq flag"></i>Iraq</div>
    <div cla="item" data-value="ie"><i cla="ie flag"></i>Ireland</div>
    <div cla="item" data-value="il"><i cla="il flag"></i>Israel</div>
    <div cla="item" data-value="it"><i cla="it flag"></i>Italy</div>
    <div cla="item" data-value="jm"><i cla="jm flag"></i>Jamaica</div>
    <div cla="item" data-value="jp"><i cla="jp flag"></i>Japan</div>
    <div cla="item" data-value="jo"><i cla="jo flag"></i>Jordan</div>
    <div cla="item" data-value="kz"><i cla="kz flag"></i>Kazakhstan</div>
    <div cla="item" data-value="ke"><i cla="ke flag"></i>Kenya</div>
    <div cla="item" data-value="ki"><i cla="ki flag"></i>Kiribati</div>
    <div cla="item" data-value="kw"><i cla="kw flag"></i>Kuwait</div>
    <div cla="item" data-value="kg"><i cla="kg flag"></i>Kyrgyzstan</div>
    <div cla="item" data-value="la"><i cla="la flag"></i>Laos</div>
    <div cla="item" data-value="lv"><i cla="lv flag"></i>Latvia</div>
    <div cla="item" data-value="lb"><i cla="lb flag"></i>Lebanon</div>
    <div cla="item" data-value="ls"><i cla="ls flag"></i>Lesotho</div>
    <div cla="item" data-value="lr"><i cla="lr flag"></i>Liberia</div>
    <div cla="item" data-value="ly"><i cla="ly flag"></i>Libya</div>
    <div cla="item" data-value="li"><i cla="li flag"></i>Liechtenstein</div>
    <div cla="item" data-value="lt"><i cla="lt flag"></i>Lithuania</div>
    <div cla="item" data-value="lu"><i cla="lu flag"></i>Luxembourg</div>
    <div cla="item" data-value="mo"><i cla="mo flag"></i>Macau</div>
    <div cla="item" data-value="mk"><i cla="mk flag"></i>Macedonia</div>
    <div cla="item" data-value="mg"><i cla="mg flag"></i>Madagascar</div>
    <div cla="item" data-value="mw"><i cla="mw flag"></i>Malawi</div>
    <div cla="item" data-value="my"><i cla="my flag"></i>Malaysia</div>
    <div cla="item" data-value="mv"><i cla="mv flag"></i>Maldives</div>
    <div cla="item" data-value="ml"><i cla="ml flag"></i>Mali</div>
    <div cla="item" data-value="mt"><i cla="mt flag"></i>Malta</div>
    <div cla="item" data-value="mh"><i cla="mh flag"></i>Marshall Islands</div>
    <div cla="item" data-value="mq"><i cla="mq flag"></i>Martinique</div>
    <div cla="item" data-value="mr"><i cla="mr flag"></i>Mauritania</div>
    <div cla="item" data-value="mu"><i cla="mu flag"></i>Mauritius</div>
    <div cla="item" data-value="yt"><i cla="yt flag"></i>Mayotte</div>
    <div cla="item" data-value="mx"><i cla="mx flag"></i>Mexico</div>
    <div cla="item" data-value="fm"><i cla="fm flag"></i>Micronesia</div>
    <div cla="item" data-value="md"><i cla="md flag"></i>Moldova</div>
    <div cla="item" data-value="mc"><i cla="mc flag"></i>Monaco</div>
    <div cla="item" data-value="mn"><i cla="mn flag"></i>Mongolia</div>
    <div cla="item" data-value="me"><i cla="me flag"></i>Montenegro</div>
    <div cla="item" data-value="ms"><i cla="ms flag"></i>Montserrat</div>
    <div cla="item" data-value="ma"><i cla="ma flag"></i>Morocco</div>
    <div cla="item" data-value="mz"><i cla="mz flag"></i>Mozambique</div>
    <div cla="item" data-value="na"><i cla="na flag"></i>Namibia</div>
    <div cla="item" data-value="nr"><i cla="nr flag"></i>Nauru</div>
    <div cla="item" data-value="np"><i cla="np flag"></i>Nepal</div>
    <div cla="item" data-value="an"><i cla="an flag"></i>Netherlands Antilles</div>
    <div cla="item" data-value="nl"><i cla="nl flag"></i>Netherlands</div>
    <div cla="item" data-value="nc"><i cla="nc flag"></i>New Caledonia</div>
    <div cla="item" data-value="pg"><i cla="pg flag"></i>New Guinea</div>
    <div cla="item" data-value="nz"><i cla="nz flag"></i>New Zealand</div>
    <div cla="item" data-value="ni"><i cla="ni flag"></i>Nicaragua</div>
    <div cla="item" data-value="ne"><i cla="ne flag"></i>Niger</div>
    <div cla="item" data-value="ng"><i cla="ng flag"></i>Nigeria</div>
    <div cla="item" data-value="nu"><i cla="nu flag"></i>Niue</div>
    <div cla="item" data-value="nf"><i cla="nf flag"></i>Norfolk Island</div>
    <div cla="item" data-value="kp"><i cla="kp flag"></i>North Korea</div>
    <div cla="item" data-value="mp"><i cla="mp flag"></i>Northern Mariana Islands</div>
    <div cla="item" data-value="no"><i cla="no flag"></i>Norway</div>
    <div cla="item" data-value="om"><i cla="om flag"></i>Oman</div>
    <div cla="item" data-value="pk"><i cla="pk flag"></i>Pakistan</div>
    <div cla="item" data-value="pw"><i cla="pw flag"></i>Palau</div>
    <div cla="item" data-value="ps"><i cla="ps flag"></i>Palestine</div>
    <div cla="item" data-value="pa"><i cla="pa flag"></i>Panama</div>
    <div cla="item" data-value="py"><i cla="py flag"></i>Paraguay</div>
    <div cla="item" data-value="pe"><i cla="pe flag"></i>Peru</div>
    <div cla="item" data-value="ph"><i cla="ph flag"></i>Philippines</div>
    <div cla="item" data-value="pn"><i cla="pn flag"></i>Pitcairn Islands</div>
    <div cla="item" data-value="pl"><i cla="pl flag"></i>Poland</div>
    <div cla="item" data-value="pt"><i cla="pt flag"></i>Portugal</div>
    <div cla="item" data-value="pr"><i cla="pr flag"></i>Puerto Rico</div>
    <div cla="item" data-value="qa"><i cla="qa flag"></i>Qatar</div>
    <div cla="item" data-value="re"><i cla="re flag"></i>Reunion</div>
    <div cla="item" data-value="ro"><i cla="ro flag"></i>Romania</div>
    <div cla="item" data-value="ru"><i cla="ru flag"></i>Russia</div>
    <div cla="item" data-value="rw"><i cla="rw flag"></i>Rwanda</div>
    <div cla="item" data-value="sh"><i cla="sh flag"></i>Saint Helena</div>
    <div cla="item" data-value="kn"><i cla="kn flag"></i>Saint Kitts and Nevis</div>
    <div cla="item" data-value="lc"><i cla="lc flag"></i>Saint Lucia</div>
    <div cla="item" data-value="pm"><i cla="pm flag"></i>Saint Pierre</div>
    <div cla="item" data-value="vc"><i cla="vc flag"></i>Saint Vincent</div>
    <div cla="item" data-value="ws"><i cla="ws flag"></i>Samoa</div>
    <div cla="item" data-value="sm"><i cla="sm flag"></i>San Marino</div>
    <div cla="item" data-value="gs"><i cla="gs flag"></i>Sandwich Islands</div>
    <div cla="item" data-value="st"><i cla="st flag"></i>Sao Tome</div>
    <div cla="item" data-value="sa"><i cla="sa flag"></i>Saudi Arabia</div>
    <div cla="item" data-value="sn"><i cla="sn flag"></i>Senegal</div>
    <div cla="item" data-value="cs"><i cla="cs flag"></i>Serbia</div>
    <div cla="item" data-value="rs"><i cla="rs flag"></i>Serbia</div>
    <div cla="item" data-value="sc"><i cla="sc flag"></i>Seychelles</div>
    <div cla="item" data-value="sl"><i cla="sl flag"></i>Sierra Leone</div>
    <div cla="item" data-value="sg"><i cla="sg flag"></i>Singapore</div>
    <div cla="item" data-value="sk"><i cla="sk flag"></i>Slovakia</div>
    <div cla="item" data-value="si"><i cla="si flag"></i>Slovenia</div>
    <div cla="item" data-value="sb"><i cla="sb flag"></i>Solomon Islands</div>
    <div cla="item" data-value="so"><i cla="so flag"></i>Somalia</div>
    <div cla="item" data-value="za"><i cla="za flag"></i>South Africa</div>
    <div cla="item" data-value="kr"><i cla="kr flag"></i>South Korea</div>
    <div cla="item" data-value="es"><i cla="es flag"></i>Spain</div>
    <div cla="item" data-value="lk"><i cla="lk flag"></i>Sri Lanka</div>
    <div cla="item" data-value="sd"><i cla="sd flag"></i>Sudan</div>
    <div cla="item" data-value="sr"><i cla="sr flag"></i>Suriname</div>
    <div cla="item" data-value="sj"><i cla="sj flag"></i>Svalbard</div>
    <div cla="item" data-value="sz"><i cla="sz flag"></i>Swaziland</div>
    <div cla="item" data-value="se"><i cla="se flag"></i>Sweden</div>
    <div cla="item" data-value="ch"><i cla="ch flag"></i>Switzerland</div>
    <div cla="item" data-value="sy"><i cla="sy flag"></i>Syria</div>
    <div cla="item" data-value="tw"><i cla="tw flag"></i>Taiwan</div>
    <div cla="item" data-value="tj"><i cla="tj flag"></i>Tajikistan</div>
    <div cla="item" data-value="tz"><i cla="tz flag"></i>Tanzania</div>
    <div cla="item" data-value="th"><i cla="th flag"></i>Thailand</div>
    <div cla="item" data-value="tl"><i cla="tl flag"></i>Timorleste</div>
    <div cla="item" data-value="tg"><i cla="tg flag"></i>Togo</div>
    <div cla="item" data-value="tk"><i cla="tk flag"></i>Tokelau</div>
    <div cla="item" data-value="to"><i cla="to flag"></i>Tonga</div>
    <div cla="item" data-value="tt"><i cla="tt flag"></i>Trinidad</div>
    <div cla="item" data-value="tn"><i cla="tn flag"></i>Tunisia</div>
    <div cla="item" data-value="tr"><i cla="tr flag"></i>Turkey</div>
    <div cla="item" data-value="tm"><i cla="tm flag"></i>Turkmenistan</div>
    <div cla="item" data-value="tv"><i cla="tv flag"></i>Tuvalu</div>
    <div cla="item" data-value="ug"><i cla="ug flag"></i>Uganda</div>
    <div cla="item" data-value="ua"><i cla="ua flag"></i>Ukraine</div>
    <div cla="item" data-value="ae"><i cla="ae flag"></i>United Arab Emirates</div>
    <div cla="item" data-value="us"><i cla="us flag"></i>United States</div>
    <div cla="item" data-value="uy"><i cla="uy flag"></i>Uruguay</div>
    <div cla="item" data-value="um"><i cla="um flag"></i>Us Minor Islands</div>
    <div cla="item" data-value="vi"><i cla="vi flag"></i>Us Virgin Islands</div>
    <div cla="item" data-value="uz"><i cla="uz flag"></i>Uzbekistan</div>
    <div cla="item" data-value="vu"><i cla="vu flag"></i>Vanuatu</div>
    <div cla="item" data-value="va"><i cla="va flag"></i>Vatican City</div>
    <div cla="item" data-value="ve"><i cla="ve flag"></i>Venezuela</div>
    <div cla="item" data-value="vn"><i cla="vn flag"></i>Vietnam</div>
    <div cla="item" data-value="wf"><i cla="wf flag"></i>Wallis and Futuna</div>
    <div cla="item" data-value="eh"><i cla="eh flag"></i>Western Sahara</div>
    <div cla="item" data-value="ye"><i cla="ye flag"></i>Yemen</div>
    <div cla="item" data-value="zm"><i cla="zm flag"></i>Zambia</div>
    <div cla="item" data-value="zw"><i cla="zw flag"></i>Zimbabwe</div>
  </div>
       </div>
    </div>
  </div>
  <h4 cla="ui dividing header">Billing Information</h4>
  <div cla="field">
    <label>Card Type</label>
    <div cla="ui selection dropdown">
      <input type="hidden" name="card[type]"/>
      <div cla="default text">Type</div>
      <i cla="dropdown icon"></i>
      <div cla="menu">
        <div cla="item" data-value="visa">
          <i cla="visa icon"></i>
          Visa
        </div>
        <div cla="item" data-value="amex">
          <i cla="amex icon"></i>
          American Express
        </div>
        <div cla="item" data-value="discover">
          <i cla="discover icon"></i>
          Discover
        </div>
      </div>
    </div>
  </div>
  <div cla="fields">
    <div cla="seven wide field">
      <label>Card Number</label>
      <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>
    </div>
    <div cla="three wide field">
      <label>CVC</label>
      <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
    </div>
    <div cla="six wide field">
      <label>Expiration</label>
      <div cla="two fields">
        <div cla="field">
          <select cla="ui fluid search dropdown" name="card[expire-month]">
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div cla="field">
          <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
        </div>
      </div>
    </div>
  </div>
   <h4 cla="ui dividing header">Receipt</h4>
   <div cla="field">
    <label>Send Receipt To:</label>
    <div cla="ui fluid multiple search selection dropdown">
      <input type="hidden" name="receipt"/>
      <i cla="dropdown icon"></i>
      <div cla="default text">Saved Contacts</div>
      <div cla="menu">
        <div cla="item" data-value="jenny" data-text="Jenny">
          <img cla="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>
          Jenny Hess
        </div>
        <div cla="item" data-value="elliot" data-text="Elliot">
          <img cla="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>
          Elliot Fu
        </div>
        <div cla="item" data-value="stevie" data-text="Stevie">
          <img cla="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>
          Stevie Feliciano
        </div>
        <div cla="item" data-value="christian" data-text="Christian">
          <img cla="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>
          Christian
        </div>
        <div cla="item" data-value="matt" data-text="Matt">
          <img cla="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>
          Matt
        </div>
        <div cla="item" data-value="justen" data-text="Justen">
          <img cla="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>
          Justen Kitsune
        </div>
      </div>
    </div>
  </div>
   <div cla="ui segment">
    <div cla="field">
      <div cla="ui toggle checkbox">
        <input type="checkbox" name="gift" tabindex="0" cla="hidden"/>
        <label>Do not include a receipt in the package</label>
      </div>
    </div>
  </div>
  <div cla="ui button" tabindex="0">Submit Order</div>
</form>
  )
}

export default Billing
