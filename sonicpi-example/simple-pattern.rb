use_bpm 120

live_loop :drums do
  sample :bd_haus
  sleep 0.5
  sample :drum_bass_hard, amp: 0.5
  sleep 0.5
end

live_loop :cymbals do
  sync :drums
  sample :elec_cymbal
  sleep 1.5
end

live_loop :lead do
  use_synth :chiplead
  sync :drums
  play :c3, sustain: 0.3
  sleep 1
  play :d3, sustain: 0.4
  sleep 2
  play :f3, sustain: 0.5
  sleep 1
end

live_loop :bass do
  use_synth :prophet
  sync :drums
  play choose(chord(:C2, :minor)), release: 1.4, cutoff: rrand(60, 120)
end
