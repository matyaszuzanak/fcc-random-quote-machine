import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * Instead of using (props) I can use ({ assignNewQuoteIndex, selectedQuote }) and don't have to use props. before them when used below
 */
const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>    
        </CardContent>
        <CardActions>
            <Button id="new-quote" size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
            <IconButton
                id="tweet-quote"
                targer="_blank"
                href={encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote} - ${selectedQuote.author}&hashtags=hashtag`)}
            >
                <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;
