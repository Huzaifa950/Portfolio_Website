import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BasicCard({ title, text, icon, color }) {
  return (
    <Card style={{ width: '20rem', backgroundColor: color, height:'35rem', alignItems:'center', border:'none', borderRadius:'0', textAlign:'center', }}>
      <Card.Body>
        {icon && (
          <div style={{ fontSize: '2rem', margin: '1rem 0' }}>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <Card.Title style={{fontSize:'x-large', fontWeight:'bold', margin:'30px 0'}}>{title}</Card.Title>
        <Card.Text style={{margin:'0 30px' }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;