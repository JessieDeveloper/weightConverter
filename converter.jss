<script type="text/javascript">

document.getElementById('lbsInput').addEventListener('input', function(e){

let lbs = e.target.value;

document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
document.getElementById('kgOutput').innerHTML = lbs/2.02046;
document.getElementById('ozOutput').innerHTML = lbs*16;

});</script>
