export const Location = (locationObj) => {
	return `<article class="location-card">
			<h3>${locationObj.name}</h3>
				<ul>
					<li class="location-details">${locationObj.harvestLocation}</li>
				</ul>
        	</article>`}