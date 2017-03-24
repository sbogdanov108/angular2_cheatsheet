import {
  Component,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "sample4",
  templateUrl: "sample4.component.html"
})
export class Sample4Component implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // Срабатывает, когда Angular устанавливает значение для input свойства
  // Метод может получать объект типа SimpleChange с информацией о новом и старом значениях
  // Срабатывает до ngOnInit и каждый раз, когда меняется значение input свойства
  ngOnChanges() {
    console.log("ngOnChanges");
  }

  // Инициализация angular компонента или директивы. Вызывается один раз после того, как компонент отобразится
  ngOnInit() {
    console.log("ngOnInit");
  }

  // Срабатывает при каждой проверке изменений. Срабатывает часто.
  ngDoCheck() {
    console.log("ngDoCheck");
  }

  // Срабатывает после того как Angular внедряет внешнее содержимое в представление компонента
  // Используется только при работе с компонентами
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  // Срабатывает после каждой проверки внедренного контента в представление компонента
  // Срабатывает после ngAfterContentInit и после каждого ngDoCheck
  // Используется только при работе с компонентами
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  // Срабатывает после инициализации представления компонента и дочерних компонентов
  // Запускается один раз после ngAfterContentChecked
  // Используется только при работе с компонентами
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  // Срабатывает после того, как Angular проверит представление компонента и все дочерние компоненты
  // Запускается после ngAfterViewInit и после каждого ngAfterContentChecked
  // Используется только при работе с компонентами
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  // Срабатывает сразу после уничтожения компонента или директивы
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  test() {
    console.log("test method");
  }
}