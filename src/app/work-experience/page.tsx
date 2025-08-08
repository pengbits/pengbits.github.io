import workData from './work.json';

export default function WorkExperience() {
  const companies = workData.work || []
  return (
    <div>
      <h1 className='text-2xl'>Work Experience</h1>
      {companies.map(({roles,company,location},index) => {
        return (
          <div key={index} className='mb-4'>
            <h2 className="text-2xl">{company} <span className='text-sm'>
              {location}</span></h2>
            {roles.map((role) => {
              return (<div key={role.title} className='mb-4'>
                <h2 className="text-xl">{role.title}{' '}
                  <span className='text-sm'>{role.startDate} - {role.endDate}</span></h2>
                <ul>
                  {role.achievements.map((item,i) => {
                    return <li key={i} className='list-disc list-inside mb-2'>
                      {item}
                    </li>
                  })}
                </ul>
              </div>)
            })}
          </div>
        )
      })}      
    </div>
  );
}
