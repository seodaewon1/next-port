import { siteText } from "@/constants"
export default function Site() {
  return (
    <section id="site">
    <div className="site__inner">
      <h2 className="site__title">Site coding <em>나의 작업물</em></h2>
      <div className="site__wrap">
            {siteText.map((siteText, key)=>(
        <div className="site__item" key={key}>
                <span className="num">{ key + 1 }.</span>
                    <div className="text">
                      <div>{ siteText.text[0] }</div>
                      <div>{ siteText.text[1] }</div>
                      <div>{ siteText.text[2] }</div>
                    </div>
                    <h3>{ siteText.title }</h3>
                  <div className="btn">
                    <a href={siteText.code}>code</a>
                    <a href={siteText.view}>view</a>
                  </div>
                  <div className="info">
                    <span>{ siteText.info[0] }</span>
                    <span>{ siteText.info[1] }</span>
                    <span>{ siteText.info[2] }</span>
                  </div>
                </div>
            ))}
            </div>            
          </div>
  </section>

  )
}
