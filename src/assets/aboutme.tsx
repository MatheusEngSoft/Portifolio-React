import TimeLine from "./components/timeline"

const events = [
  { data: '2023', description: 'comecei minha faculdade de engenharia de software'},
  { data: '2024', description: 'comecei a estudar desenvolvimento web pela DNC'},
  { data:'2024', description: 'Testando'}
]

export default function AboutMe(){
  return(
    <TimeLine events={events}/>
  )
}