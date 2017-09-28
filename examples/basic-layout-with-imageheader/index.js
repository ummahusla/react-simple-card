import React from "react";
import { render } from "react-dom";
import { Card, ImageHeader, CardBody, CardFooter } from "react-simple-card";

const App = () => (
	<div>
		<h2>React Simple Card basic layout with image header</h2>
		<Card>
			<ImageHeader imageSrc="http://via.placeholder.com/600x250?text=Placeholder" />
			<CardBody>
				<p>
					Phasellus eleifend orci sed neque ultricies viverra. Nulla orci nunc,
					hendrerit sed malesuada a, pharetra sed sem. Vivamus et vestibulum
					nulla. Curabitur gravida maximus dolor at scelerisque. In dignissim,
					diam nec vehicula scelerisque, metus purus vulputate ante, ac faucibus
					dui orci dignissim ipsum. Nullam euismod turpis id scelerisque congue.
				</p>
				<p>
					Donec blandit risus ullamcorper suscipit sagittis. Nam auctor laoreet
					mauris ut bibendum. Aliquam et sodales justo. Proin aliquam augue in
					ipsum rutrum, ac tristique tellus tincidunt. Aenean blandit ultrices
					pretium. Suspendisse in arcu bibendum, egestas lorem a, fringilla
					purus. Integer hendrerit nibh tincidunt, tempor diam eget, tincidunt
					tortor. Praesent volutpat odio metus, et sollicitudin dolor
					ullamcorper ut.
				</p>
			</CardBody>
			<CardFooter>
				<p>
					<a href="#123">Nullam vel</a>
				</p>
			</CardFooter>
		</Card>
	</div>
);

render(<App />, document.getElementById("root"));
