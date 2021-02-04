import React from 'react';
import Card from 'react-bootstrap/Card'
import Vote from '../Vote/Vote';

function ProjectCard({id, author, projectName, concept, rating, status}) {

	return (
		<div>

			<Card>
				<Card.Body>
					<Card.Title>ProjectName</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
					<Card.Text>
						ConceptConceptConceptConceptConceptConceptConceptConceptConceptConceptConceptConcept
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Status</small>
					<small className="text-muted">Rating</small>
					<small className="text-muted">
						<Vote/>
					</small>
				</Card.Footer>
			</Card>

		</div>
	);
}

export default ProjectCard;
