import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fontAwesomeIcon, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
           { 
                props.selectedQuote ?
                (
                    <Typography>
                        {props.selectedQuote.quote} - {props.selectedQuote.author}
                    </Typography>
                ) : null
            }    
        </CardContent>
        <CardActions>
            <Button size="small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
            <IconButton>
                <FontAwesomeIcon> icon={faTwitter} size="md"</FontAwesomeIcon>
            </IconButton>
        </CardActions>
        
    </Card>
);

export default QuoteMachine;