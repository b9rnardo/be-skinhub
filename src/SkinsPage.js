import './styles.css';
import logo from './logo.gif';
import bdtgif from './bdt.gif';
import bubblegif from './bubble.gif';


function SkinsPage() {
    return (
        <div className="SkinsPage">
        <div className="Skins">
        <div className="Header">
            <div className="bomba">
                <div className="Logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="Title">
                    <h1>my skins!</h1>
                </div>
        </div>
        <div className="Skins">
        <a href="https://www.mediafire.com/file/sad3qs9595z73q9/bdt.osk/file">
            <div className="SkinsComp">
    
                    <div className="SkinName">
                        BDT
                        </div>
                    <div className="SkinDesc">
                        dt skin with clack hs  
                    <img className="SkinPreview" src={bdtgif} alt="bdt skin previw"/>
    
                </div>
            </div>
        </a>
        <a href="https://www.mediafire.com/file/pbify7f5nj4zm1d/be_bubbleman.osk/file">
            <div className="SkinsComp">
                <div className="SkinsHeader">
                    <div className="SkinName">
                        be_bubble
                        </div>
                        <div className="SkinDesc">
                            bubbleman skin mix
                        <img className="SkinPreview" src={bubblegif} alt="be_bubble skin previw"/>
                </div>
            </div>
            </div>
        </a>
            </div>
        </div>
    </div>
    </div>
    )
}

export default SkinsPage;