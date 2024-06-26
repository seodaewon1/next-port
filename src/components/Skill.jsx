import { skillText } from "@/constants"
export default function Skill() {
  return (
    <section id="skill">
    <div class="skill__inner">
      <div class="skill__title">
        <h2>CHALLENGE <em>나의 도전</em></h2>
      </div>
      <div class="skill__desc">
        <div>
          {skillText.map((skillText, key) =>(
          <div key={key}>
              <span>{ key + 1 }.</span>
              <h3>{skillText.title }</h3>
              <p>{ skillText.desc }</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}
