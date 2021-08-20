export const Tip = (tipObj) => {
	return `<article class="tip-card">
				<ul>
					<li class="fish-details">Tip 1: ${tipObj.tipOne}</li>
					<li class="fish-details">Tip 2: ${tipObj.tipTwo}</li>
                    <li class="fish-details">Tip 3: ${tipObj.tipThree}</li>
                    <li class="fish-details">Tip 4: ${tipObj.tipFour}</li>
                    <li class="fish-details">Tip 5: ${tipObj.tipFive}</li>
                    <li class="fish-details">Tip 6: ${tipObj.tipSix}</li>			
				</ul>
        	</article>`
}