
type TimelineProps = {
  events: {data:string; description:string}[]
}

export default function TimeLine(props: TimelineProps){
  return(
    <div>
      <h1 className="mb-5 text-[64px] font-semibold ml-40">Sobre Mim</h1>
      <div className=" flex mt-20 justify-center">
      {props.events.map((event, index) =>(
        <div key={index} className=" flex flex-col items-center mr-4 pr-3 ml-40" >
            <p className="text-[36px] font-semibold">{event.data}</p>
            <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            <p className=" text-[28px] font-semibold p-2 text-center" style={{ maxWidth: '400px', wordWrap: 'break-word' }}>{event.description}</p>          
        </div>
      ))}
      </div>
    </div>    
  )
}
