//Render HTML
function renderHtml(id) {
  let container = document.createElement('div');
  container.setAttribute('id', `${id}`);
  container.innerHTML = `<div class="info-panel">
                      <span class="status">Status:</span>
                    </div>
                    <button class="btnStart">Start</button>
                    <div class="controls-panel">
                      <div class="gear-box">
                        <span class="gear">Gear: N</span>
                      </div>
                    </div>`
  garage.append(container);
}
