import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import workData from './work.json';

export default function WorkExperience() {
  const companies = workData.work || []
  return (
    <Container maxWidth="md">
      <Typography variant="h3">Work Experience</Typography>
      {companies.map(({roles,company,location},index) => {
        return (
          <div key={index} className='mb-4'>
            <Typography sx={{marginBottom:'15px'}} variant="h4">{company} <span className='text-sm'>
              {location}</span></Typography>
            {roles.map((role) => {
              return (<div key={role.title} className='mb-4'>
                <Typography variant="h5">{role.title}{' '}
                  <span className='text-sm'>{role.startDate} - {role.endDate}</span></Typography>
                <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                  {role.achievements.map((item,i) => {
                    return <ListItem sx={{ display: 'list-item' }} key={i}>
                      {item}
                    </ListItem>
                  })}
                </List>
              </div>)
            })}
          </div>
        )
      })}       
    </Container>
  );
}
