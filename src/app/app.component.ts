import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
	selector: 'app',
    standalone: true,
    exportAs: "Example3",
    imports: [TuiProgress],
    templateUrl: './app.template.html',
    styleUrls: ["./app.style.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
